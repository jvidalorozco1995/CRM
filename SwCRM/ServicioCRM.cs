using BLLCRM;
using DAL;
using Entity;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace SwCRM
{
    public partial class ServicioCRM : ServiceBase
    {
        private Timer _timer;

        private DateTime _lastRun = DateTime.Now.AddDays(-1);

        public ServicioCRM()
        {
            InitializeComponent();
            if (!System.Diagnostics.EventLog.SourceExists("MySource")) {
                System.Diagnostics.EventLog.CreateEventSource("MySource", "MyNewLog");
            }
            eventLog1.Source = "MySource";
            eventLog1.Log = "MyNewLog";
        }

        protected override void OnStop()
        {
            eventLog1.WriteEntry("Servicio Finalizado...!");

        }

        protected override void OnStart(string[] args)
        {
             eventLog1.WriteEntry("Servicio Iniciado...!");
            _timer = new Timer(1 * 60 * 1000); // every 10 minutes
            _timer.Elapsed += new System.Timers.ElapsedEventHandler(timer_Elapsed);
            _timer.Start();
        }

        ConecFox fx = new ConecFox();
        BLLTareas tar = new BLLTareas();

        public void ListNegocio() 
        {
            InsertNegocio(fx.ConsulNegocio());
        }
       
        public void InsertNegocio(List<NegociosFox> ac)
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            hn.Hojanegocio(ac);
        }

        public void AcuerdoFox()
        {
            InsertAcuerdo(fx.ConsulAcuerdoPago());
        }

        public List<PagosFox> listPagosFox(string refe)
        {

            return fx.ConsultPagosFox(refe).ToList();
        }

        public void UpdateTareasEstados() {

            tar.UpdateTareasEstados();
        }

        public void InsertPago(){
            BLLNegocioFox hn = new BLLNegocioFox();
            var listneg = hn.NegociosFoxCRM();
            foreach (var item in listneg)
            {
                //Lista de pagos por referencia o negocio 
                var listapag = listPagosFox(item.SUCURSAL + item.NEGOCIO);

                foreach (var list in listapag)
                {

                    InsertPago(list);

                }

            }
        }

        public void InsertAcuerdo(List<AcuerdoFox> ac)
        {
            BLLAcuerdoFox hn = new BLLAcuerdoFox();
            hn.Acuerdo(ac);
        }
    
        public string InsertPago(PagosFox ac)
        {
            try
            {
                BLLPagosFox hn = new BLLPagosFox();
                return hn.Pagos(ac);
            }
            catch (Exception ex)
            {

                return ex.ToString();
            }
        }

        private void timer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
        {
            // ignore the time, just compare the date
            if (_lastRun.Date < DateTime.Now.Date)
            {
                eventLog1.WriteEntry("Actualizando datos...!");
                ListNegocio();
                AcuerdoFox();
                InsertPago();
                UpdateTareasEstados();
                // stop the timer while we are running the cleanup task
                _timer.Stop();
                //
                // do cleanup stuff
                //
                _lastRun = DateTime.Now;
                _timer.Start();
            }
        }
    }
}
