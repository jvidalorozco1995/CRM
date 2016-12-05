using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;
using BLLCRM;
using System.Net.Mail;
using System.Net;

namespace BLLCRM
{
 public class BLLAval
    {
        CRMEntiti bd = new CRMEntiti();
        USUARIOSACTIVOSEntities db = new USUARIOSACTIVOSEntities();
        public int InsertIAval(Aval p, List<ItemAval> itemAval)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Aval.OrderByDescending(u => u.Registro).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.Registro); }
                // b.ENVIADO = DateTime.Now;
                p.Registro = (cons + 1);
                if (p.Aprueba == 1)
                {
                    p.UsuarioAprueba = Membership.GetUser().ToString();
                }
                var Avalinsertado = bd.Aval.Add(p);
                bd.SaveChanges();
                // se gurada la primera fecha de inspeccion
                FechasAval fechas = new FechasAval();
                fechas.FechaInspeccion = DateTime.Now;
                fechas.idRegistro = Avalinsertado.id;   
                InsertFechasAval(fechas);
                // se guarda los item por registro de aval
                InserItemAval(itemAval, Avalinsertado.id,p.ReferenciaInmueble);
                EnviarCorreoSolicitud(p, Avalinsertado.id);
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }
        public List<VistaAVal> ListIAval(string id)
        {
            

            try
            {
                List<VistaAVal> lisb = bd.VistaAVal.Where(t=> t.ReferenciaInmueble == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAVal> lisbcrm = new List<VistaAVal>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAVal entb = new VistaAVal();
                        entb.id = item.id;
                        entb.Registro = item.Registro;
                        entb.Propietario = item.Propietario;
                        entb.Residente = item.Residente;
                        entb.Inspeccion = item.Inspeccion;
                        entb.Aprueba = item.Aprueba;
                        entb.UsuarioAprueba = item.UsuarioAprueba;
                        entb.FechaFinApro = item.FechaFinApro;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.ReferenciaInmueble = item.ReferenciaInmueble;
                        entb.INMUEBLE = item.INMUEBLE;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<VistaAvalAntes> ListIAvalAntes(string id)
        {


            try
            {
                List<VistaAvalAntes> lisb = bd.VistaAvalAntes.Where(t => t.REFERENCIA == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAvalAntes> lisbcrm = new List<VistaAvalAntes>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAvalAntes entb = new VistaAvalAntes();
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.INMUOBRA = item.INMUOBRA;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.REFERENCIA = item.REFERENCIA;
                        entb.NOMBRECLIENTE = item.NOMBRECLIENTE;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public int InsertFechasAval(FechasAval p)
        {
            try
            {

                bd.FechasAval.Add(p);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }
        public string InserItemAval(List<ItemAval> list, int? aval,string referenciainmueble)
        {
            try
            {

                foreach (var item in list)
                {

                    ItemAval inmu = new ItemAval();
                    inmu.IdAval = aval;
                    inmu.Ambiente = item.Ambiente;
                    inmu.Numero = item.Numero;
                    inmu.Item = item.Item;
                    inmu.Cumple = item.Cumple;
                    if (item.Cumple == 1)
                    {
                        inmu.FechaRecibido = DateTime.Now;
                        inmu.UsuarioAprueba = Membership.GetUser().ToString();
                        inmu.FechaCompromiso = DateTime.Now;
                    }
                    else
                    {
                        inmu.FechaCompromiso = item.FechaCompromiso;
                    }
                    inmu.Observaciones = item.Observaciones;
                    
                    bd.ItemAval.Add(inmu);

                }
                bd.SaveChanges();

                var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
                ctx2.ESTADOAVAL = 1;
                bd.SaveChanges();
                return "Se ha guardado satisfactoriamente el registro";
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.ToString().Contains("No se puede insertar una fila de clave duplicada"))
                {

                    return "Error 404 validation no found";
                }
                else
                {
                    throw ex;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int Aprobar(string referenciainmueble, int idaval)
        {

            try
            {
                var ctx = bd.Aval.First(inm => inm.id == idaval);

                ctx.Aprueba = 1;
                ctx.UsuarioAprueba = Membership.GetUser().ToString();
                ctx.FechaFinApro = DateTime.Now;
                bd.SaveChanges();

                var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
                ctx2.ESTADOAVAL = 2;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public void EnviarCorreoSolicitud(Aval x, int aval)
        {
            var enviado = "";
            var dirobra = "";
            var nombre = "";
            var mz = "";
            var inmueb = "";
            var estado2 = "";
            var f = bd.VListadoEntegrasC.First(inm => inm.IdAval == aval);
            nombre = f.NOMBRE_PROYEC.Trim();
            mz = f.NOMBRE_BLO.Trim();
            inmueb = f.INMUEBLE;

            var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == x.ReferenciaInmueble);
            var referencia = ctx.ID_ENTREGA;
            var estado = ctx.ESTADOAVAL;
            if (estado == 1)
            {
                estado2 = "Revisado con hallazgos";
            }
            else if (estado == 2)
            {
                estado2 = "Aprobado para entrega";
            }
            else
            {
                estado2 = "No revisado";
            }
            var cte = bd.Entregas.First(inm => inm.ID_ENTREGAS == referencia);
            enviado = cte.ENVIADOPOR;
            dirobra = cte.DIROBRA;
            string email = null;
            string cuerpo = null;
            var ctf = db.Usuarios.Where(p => p.Dominio == dirobra).ToList();
            foreach (var item2 in ctf)
            {
                email = item2.Correo;
            }
            ctf = db.Usuarios.Where(p => p.Dominio == enviado).ToList();
            foreach (var item2 in ctf)
            {
                email = email + "," + item2.Correo;
            }
            MailMessage mmsg = new MailMessage();
            mmsg.To.Add(email);
            mmsg.Subject = "Constructora los mayales";
            mmsg.SubjectEncoding = System.Text.Encoding.UTF8;

            cuerpo = "<p style='text-align:justify'>" +
            "Un nuevo proceso de Aval se ha iniciado en el proyecto: " + nombre + ", manzana : "+ mz+", inmueble: " + inmueb+".</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Numero del Aval: " + aval + ". Con el estado:" + estado2;
            //cuerpo += "</br>";
            cuerpo += "<p>Ingrese al siguiene Link para mayor informacion.</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>http://servidor.mayales.com:81/CRM/Entrega/RevisionCalidad/WebRevisionCalidad.aspx</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Cordial saludo,</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Este correo fue creado por un sistema automatico, favor no responder.</p>";

            AlternateView htmlView = AlternateView.CreateAlternateViewFromString("'<html><body>" + cuerpo + "</body></html>'<img src=cid:companylogo>", null, "text/html");
            //create the LinkedResource (embedded image)
            //LinkedResource logo = new LinkedResource("C:\\logo.png");
            //logo.ContentId = "companylogo";
            ////add the LinkedResource to the appropriate view
            //htmlView.LinkedResources.Add(logo);
            mmsg.AlternateViews.Add(htmlView);
            //mmsg.Body = ;
            mmsg.IsBodyHtml = true; //Si no queremos que se envíe como HTML
            //Correo electronico desde la que enviamos el mensaje
            mmsg.From = new System.Net.Mail.MailAddress("crm@mayales.com");
            /*-------------------------CLIENTE DE CORREO----------------------*/
            SmtpClient _Svcliente = new SmtpClient();
            //Hay que crear las credenciales del correo emisor
            _Svcliente.Credentials = new NetworkCredential("crm@mayales.com", "Crm.2015#");
            //Lo siguiente es obligatorio si enviamos el mensaje desde Gmail
            /*
            cliente.Port = 587;
            cliente.EnableSsl = true;
            */
            _Svcliente.Host = "mail.mayales.com"; //Para Gmail "smtp.gmail.com";
            try
            {
                //Enviamos el mensaje      
                _Svcliente.Send(mmsg);
            }
            catch (SmtpException ex)
            {
                throw ex;

            }
        }
    }
}
