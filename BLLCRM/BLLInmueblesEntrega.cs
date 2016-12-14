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
   public class BLLInmueblesEntrega
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
        public int InserInmueblesEntregas(INMUEBLES_ENTREGAS b)
        {
            try
            {
                b.FECHAREG = DateTime.Now;
                bd.INMUEBLES_ENTREGAS.Add(b);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateInmueblesEntregas(INMUEBLES_ENTREGAS i)
        {
            try
            {
                var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == i.ID_INMUEBLES_ENTREGAS);

               
                ctx.FECHAREG = i.FECHAREG;
                ctx.CONFIRMAOBRA = i.CONFIRMAOBRA;
                ctx.FECHACONFIRMA = i.FECHACONFIRMA;
                ctx.INSPECCIONCAL = i.INSPECCIONCAL;
                ctx.ESTADOAVAL = i.ESTADOAVAL;
                ctx.RADICADOVENTA = i.RADICADOVENTA;
                ctx.ENTREGAOBRA = i.ENTREGAOBRA;
                ctx.FECHACLIENTE = i.FECHACLIENTE;
                ctx.ESTADOENTREGA = i.ESTADOENTREGA;
                ctx.FECHAENTREGA = i.FECHAENTREGA;
                ctx.OBSERVACIONES = i.OBSERVACIONES;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public int UpdateIEestados(int i, INMUEBLES_ENTREGAS idIE)
        {
            var cadena = "";
            try
            {
                if (i == 1)
                {
                    var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx.RADICADOVENTA = idIE.RADICADOVENTA;
                    bd.SaveChanges();
                    cadena = "La fecha de radicado de venta es: " + idIE.RADICADOVENTA;
                }
                else if (i == 2)
                {
                    var ctx1 = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx1.ENTREGAOBRA = idIE.ENTREGAOBRA;
                    bd.SaveChanges();
                    cadena = "La fecha de entrega de obra es: " + idIE.ENTREGAOBRA;
                }
                else if (i == 3)
                {
                    var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == idIE.ID_INMUEBLES_ENTREGAS);
                    ctx2.FECHACLIENTE = idIE.FECHACLIENTE;
                    bd.SaveChanges();
                    cadena = "La fecha de entrega al cliente es: " + idIE.FECHACLIENTE;
                }
                EnviarCorreoSolicitudFechas(idIE,cadena);
                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public int ConfirmaObservaciones(List<INMUEBLES_ENTREGAS> a)
        {
            try
            {
                foreach (var item in a)
                {
                    var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == item.ID_INMUEBLES_ENTREGAS);
                    var obra = ctx.REFERENCIA_INMUEBLE.Substring(0, 3);
                    var pro = bd.proyectos.First(inm2 => inm2.ID_PROYEC == obra);
                    var repre = bd.ResponsableCalidad.First(inm3 => inm3.Proyecto == pro.NOMBRE_PROYEC);
                    ctx.FECHACONFIRMA = DateTime.Now;
                    ctx.INSPECCIONCAL = repre.Usuario;
                    ctx.CONFIRMAOBRA = item.CONFIRMAOBRA;
                    ctx.OBSERVACIONES = item.OBSERVACIONES;
                    bd.SaveChanges();
                   
                }
                EnviarCorreoSolicitud(a);
                return 1;
            }

            catch (Exception ex)
            {
               
                throw;
            }
        }

        public int ValidaReferencia(string Referencia)
        {
            try
            {
                var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == Referencia);

                if(ctx == null)
                {
                    return 0;
                }
                else {
                    return 1;
                }

                
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<VListadoEntregas> ListInmueblesEntregasproyecto(int PROYECTO)
        {
            var Contador = 1;
            try
            {
                List<VListadoEntregas> lisb = bd.VListadoEntregas.Where(t => t.ID_ENTREGA == PROYECTO).ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntregas> lisbcrm = new List<VListadoEntregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VListadoEntregas entb = new VListadoEntregas();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.CONTADOR = Contador;
                        entb.ID_PROYEC = item.ID_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        entb.CONFIRMAOBRA = item.CONFIRMAOBRA;
                        lisbcrm.Add(entb);
                        Contador = Contador + 1;
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Vistablackboard> LisInmueblesEntregasblackboard(string proyecto)
        {
            try
            {
                List<Vistablackboard> lisb = bd.Vistablackboard.Where(t => t.SUC == proyecto).ToList();
                //bd.compromisosxcuota.ToList();
                List<Vistablackboard> lisbcrm = new List<Vistablackboard>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Vistablackboard entb = new Vistablackboard();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.FECHAREG = item.FECHAREG;
                        entb.CONFIRMAOBRA = item.CONFIRMAOBRA;
                        entb.FECHACONFIRMA = item.FECHACONFIRMA;
                        entb.ESTADOAVAL = item.ESTADOAVAL;
                        entb.INSPECCIONCAL = item.INSPECCIONCAL;
                        entb.RADICADOVENTA = item.RADICADOVENTA;
                        entb.ENTREGAOBRA = item.ENTREGAOBRA;
                        entb.FECHACLIENTE = item.FECHACLIENTE;
                        entb.ESTADOENTREGA = item.ESTADOENTREGA;
                        entb.FECHAENTREGA = item.FECHAENTREGA;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        entb.SUC = item.SUC;
                        entb.ENVIADO = item.ENVIADO;
                        entb.ENVIADOA = item.ENVIADOA;
                        entb.ENVIADOPOR = item.ENVIADOPOR;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.id = item.id; //id = idAval
                        entb.CONSECUTIVO = item.CONSECUTIVO;
                        entb.USUARIO = Membership.GetUser().ToString();
                        entb.DIROBRA = item.DIROBRA;
                        entb.PROPIETARIO = item.PROPIETARIO;
                        entb.CEDULA_P = item.CEDULA_P;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.Direccion = item.Direccion;
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
        public List<VListadoEntregas> ListInmueblesEntregas(int id)
        {
            var Contador = 1;
            try
            {
                List<VListadoEntregas> lisb = bd.VListadoEntregas.Where(t => t.ID_ENTREGA == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VListadoEntregas> lisbcrm = new List<VListadoEntregas>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VListadoEntregas entb = new VListadoEntregas();
                        entb.ID_INMUEBLES_ENTREGAS = item.ID_INMUEBLES_ENTREGAS;
                        entb.ID_ENTREGA = item.ID_ENTREGA;
                        entb.REFERENCIA_INMUEBLE = item.REFERENCIA_INMUEBLE;
                        entb.MZA = item.MZA;
                        entb.INMUEBLE = item.INMUEBLE;
                        entb.CONTADOR = Contador;
                        entb.OBSERVACIONES = item.OBSERVACIONES;
                        lisbcrm.Add(entb);
                        Contador = Contador + 1;
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public int ActualizarDocumentoAdj(INMUEBLES_ENTREGAS InmEnt)
        {

            try
            {
                var item = bd.INMUEBLES_ENTREGAS.Where(t => t.ID_INMUEBLES_ENTREGAS == InmEnt.ID_INMUEBLES_ENTREGAS).FirstOrDefault();
                item.DOCUMENTO = InmEnt.DOCUMENTO;
                item.FECHAENTREGA = InmEnt.FECHAENTREGA;
                bd.SaveChanges();

                return 1;
            }
            catch (Exception ex)
            {

                return 0;
            }

        }
        public void EnviarCorreoSolicitud( List<INMUEBLES_ENTREGAS> a)
        {
            int? solicitud = 0;
            var enviado = "";
            var dirobra = "";
            var tabla = "<table id='esd2' class='table table-striped table-bordered table-hover' border = 1>";
            tabla += "<thead>";
            tabla += "<tr>";
            tabla += "<th>Manzana</th>";
            tabla += "<th>Inmueble</th>";
            tabla += "</tr>";
            tabla += "</thead>";
            tabla += "<tbody>";
            foreach (var item in a)
            {
                if (item.CONFIRMAOBRA == 1)
                {
                    var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == item.ID_INMUEBLES_ENTREGAS);
                    solicitud = ctx.ID_ENTREGA;
                    var obra = ctx.REFERENCIA_INMUEBLE.Substring(0, 6);
                    var pro = bd.bloques.First(inm2 => inm2.ID_BLOQUE == obra);
                    var casa = ctx.REFERENCIA_INMUEBLE.Substring(8, 5);
                    var cte = bd.Entregas.First(inm => inm.ID_ENTREGAS == solicitud);
                    enviado = cte.ENVIADOPOR;
                    dirobra = cte.DIROBRA;
                    tabla += "<tr>";
                    tabla += "<td>" + pro.NOMBRE_BLO + "</td>";
                    tabla += "<td>" + casa + "</td>";
                    tabla += "</tr>";
                }
            }
            tabla += "</tbody>";
            tabla += "</table>";
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


            cuerpo = "<p style='text-align:justify'>";
            //cuerpo += "</br>";
            cuerpo += "<p>El proceso de entregas con numero: " + solicitud + " ha cambiado.</p>";
            cuerpo += "<p>"+ tabla +"</p>";
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
        public void EnviarCorreoSolicitudFechas(INMUEBLES_ENTREGAS x, string cad)
        {
            var enviado = "";
            var dirobra = "";
            var nombre = "";
            var mz = "";
            var inmueb = "";
            var f = bd.Vistablackboard.First(inm => inm.ID_INMUEBLES_ENTREGAS == x.ID_INMUEBLES_ENTREGAS);
            nombre = f.SUC;
            mz = f.NOMBRE_BLO;
            inmueb = f.INMUEBLE;
            var pa = bd.proyectos.First(inm => inm.ID_PROYEC == nombre);
            nombre = pa.NOMBRE_PROYEC.Trim();
            var ctx = bd.INMUEBLES_ENTREGAS.First(inm => inm.ID_INMUEBLES_ENTREGAS == x.ID_INMUEBLES_ENTREGAS);
            var referencia = ctx.ID_ENTREGA;
            var refe = ctx.REFERENCIA_INMUEBLE;
            var cta = bd.Aval.First(inm => inm.ReferenciaInmueble == refe);
            var aval = cta.id;
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
            "Se establecio una nueva fecha en el proyecto: " + nombre + ", manzana : " + mz + ", inmueble: " + inmueb + ".</p>";
            cuerpo += "<p>Numero del aval: " + aval + "</p>"; 
            cuerpo += "<p>" + cad + "</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>Ingrese al siguiene Link para mayor informacion.</p>";
            //cuerpo += "</br>";
            cuerpo += "<p>http://servidor.mayales.com:81/CRM/Entrega/MaestroInmueble/WebMaestroInmueble.aspx</p>";
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
           // mmsg.Body = ;
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
