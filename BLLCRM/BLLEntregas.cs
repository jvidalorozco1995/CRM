using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
  public  class BLLEntregas
    {
        CRMEntiti bd = new CRMEntiti();
        USUARIOSACTIVOSEntities db = new USUARIOSACTIVOSEntities();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public string InserEntregas(Entregas b,List<INMUEBLES_ENTREGAS> list)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Entregas.OrderByDescending(u => u.CONSECUTIVO).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.CONSECUTIVO); }
               // b.ENVIADO = DateTime.Now;
                b.CONSECUTIVO = (cons + 1);
                b.FECHAREG = DateTime.Now;
                b.USUARIO = Membership.GetUser().ToString();
                b.ENVIADOPOR = Membership.GetUser().ToString();
                var item = bd.Entregas.Add(b);
                var a =  bd.SaveChanges();
                if (a > 0) {
                    foreach (var entidad in list) {

                        INMUEBLES_ENTREGAS inmu = new INMUEBLES_ENTREGAS();
                        inmu.REFERENCIA_INMUEBLE = entidad.REFERENCIA_INMUEBLE;
                        inmu.FECHAREG = DateTime.Now;
                        inmu.ID_ENTREGA = item.ID_ENTREGAS;
                        bd.INMUEBLES_ENTREGAS.Add(inmu);
                       
                    }
                    bd.SaveChanges();
                   
                }


              
                return "Se ha guardado satisfactoriamente la solicitud";
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.ToString().Contains("No se puede insertar una fila de clave duplicada"))
                {

                    return "Este inmueble ya tiene solicitudes agregadas";
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

   
        public int UpdateEntregas(int id)
        {

            try
            {
                

                var ctx = bd.Entregas.First(inm => inm.ID_ENTREGAS == id);

                ctx.ENVIADO = DateTime.Now;
                ctx.ENVIADOA = ctx.DIROBRA;
                bd.SaveChanges();
                EnviarCorreoSolicitud(ctx.DIROBRA, ctx.ID_ENTREGAS);
                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<Entregas> ListEntregas(int id)
        {

            try
            {
                List<Entregas> lisb = bd.Entregas.Where(t => t.ID_ENTREGAS == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
        public List<Entregas> ListEntregasPor()
        {
           var user = Membership.GetUser().ToString();
            try
            {
                List<Entregas> lisb = bd.Entregas.Where(t => t.ENVIADOA == user || t.USUARIO == user || t.ENVIADOPOR == user).ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA + "/" +user;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
      
        public List<Entregas> ListEntregas()
        {

            try
            {
                List<Entregas> lisb = bd.Entregas.ToList();
                //bd.compromisosxcuota.ToList();
                List<Entregas> lisbcrm = new List<Entregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Entregas entb = new Entregas();
                        entb.ID_ENTREGAS = item.ID_ENTREGAS;
                        entb.FECHAREG = item.FECHAREG;
                        entb.ID_PROYECTO = item.ID_PROYECTO;
                        entb.DIROBRA = item.DIROBRA;
                        entb.USUARIO = item.USUARIO;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.CONSECUTIVO = item.CONSECUTIVO;
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
        public List<VListadoEntegrasC> ListEntregasC()
        {

            try
            {
                List<VListadoEntegrasC> lisb = bd.VListadoEntegrasC.ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntegrasC> lisbcrm = new List<VListadoEntegrasC>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        
                        VListadoEntegrasC entb = new VListadoEntegrasC();
                        entb.CONSECUTIVO = item.CONSECUTIVO;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.MZA = item.MZA;
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.FECHACONFIRMA = item.FECHACONFIRMA;
                        entb.ESTADOAVAL = item.ESTADOAVAL;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.IdAval = item.IdAval;
                        entb.FECHAREG = item.FECHAREG;
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
        public void EnviarCorreoSolicitud(string directorobra, int solicitud)
        {
            var ctx = db.Usuarios.Where(p => p.Dominio == directorobra).ToList();   
            string email = null;
            string cuerpo = null;
            foreach (var item in ctx)
            {
                email = item.Correo;
            }

            MailMessage mmsg = new MailMessage();
            mmsg.To.Add(email);
            mmsg.Subject = "Constructora los mayales";
            mmsg.SubjectEncoding = System.Text.Encoding.UTF8;

            cuerpo = "<p style='text-align:justify'>" +
            "Un nuevo proceso de entregas le ha sido asignado.</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Numero de solicitud: " + solicitud;
            //cuerpo += "</br>";
            cuerpo += "<p>Ingrese al siguiene Link para mayor informacion.</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>http://servidor.mayales.com:81/CRM/Entrega/ProgramacionEntregas/WebProgramacionEntregas.aspx</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Cordial saludo,</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Este correo fue creado por un sistema automatico, favor no responder.</p>";
            
            AlternateView htmlView = AlternateView.CreateAlternateViewFromString("'<html><body>" + cuerpo + "</body></html>'<img src=cid:companylogo>", null, "text/html");
            //create the LinkedResource (embedded image)
            LinkedResource logo = new LinkedResource("C:\\logo.png");
            logo.ContentId = "companylogo";
            ////add the LinkedResource to the appropriate view
            htmlView.LinkedResources.Add(logo);
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
