using DAL;
using Entity;
using Entity.VInmuebles;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{    public class BLLInmuebles
    {
      CRMEntiti db = new CRMEntiti();
        private string user = null;
        string mensaje = null;
        private int DIAS_TR=0;
        /// <summary>
        /// Metodo para insertar inmuebles traidos de multi-fox a CRM
        /// recibe una lista de inmuebles
        /// </summary>
        /// <param name="i"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertInmuebles(List<inmuebles> i, string b)
        {

            try
            {
                List<inmuebles> lisI = db.inmuebles.OrderBy(l => l.INMUEBLE).Where(t => t.INMUOBRA == b).ToList();
                if (lisI.Count.Equals(0))
                {
                    //NO esxiten Inmuebles Registrados
                    foreach (var item in i)
                    {
                        inmuebles inm = new inmuebles();
                        inm.REFERENCIA = item.REFERENCIA;
                        inm.INMUOBRA = item.INMUOBRA;
                        inm.INMUDECS = item.INMUDECS;
                        inm.SUC = item.SUC;
                        inm.PPTO = item.PPTO;
                        inm.MZA = item.MZA;
                        inm.INMUEBLE = item.INMUEBLE;
                        inm.AREA = item.AREA;
                        inm.VAL_INMUEBLE = item.VAL_INMUEBLE;
                        inm.INMUESTADO = item.INMUESTADO;
                        db.inmuebles.Add(inm);

                    }
                    db.SaveChanges();
                    return 1;
                }
                else
                {
                    for (int l1 = 0; l1 < i.Count; l1++)
                    {
                        for (int l2 = 0; l2 < lisI.Count; l2++)
                        {
                            if (i[l1].REFERENCIA.Equals(lisI[l2].REFERENCIA))
                            {
                                i.RemoveAt(l1);
                            }
                            else
                            {
                                for (int l3 = 0; l3 < i.Count; l3++)
                                {
                                    inmuebles inm = new inmuebles();
                                    inm.REFERENCIA = i[l3].REFERENCIA;
                                    inm.INMUOBRA = i[l3].INMUOBRA;
                                    inm.INMUDECS = i[l3].INMUDECS;
                                    inm.SUC = i[l3].SUC;
                                    inm.PPTO = i[l3].PPTO;
                                    inm.MZA = i[l3].MZA;
                                    inm.INMUEBLE = i[l3].INMUEBLE;
                                    inm.AREA = i[l3].AREA;
                                    inm.VAL_INMUEBLE = i[l3].VAL_INMUEBLE;
                                    inm.INMUESTADO = i[l3].INMUESTADO;
                                    db.inmuebles.Add(inm);

                                }
                                db.SaveChanges();
                                return 1;
                            }
                        }
                    }
                }
                return 0;

            }
            catch (DbUpdateException)
            {
                return 0;
                throw;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }

        }

            /// <summary>
        /// Metodo para actualizar datos de los inmuebles 
        /// traidos de multifox
        /// </summary>
        /// <param name="li"></param>
        /// <returns></returns>
        public string UpdateInmuebles(List<inmuebles> i,string b) {

            try
            {
                foreach (var item in i)
                {
                    if (b.Length == 3)
                    {
                        foreach (var item2 in db.inmuebles.Where(t => t.REFERENCIA == item.REFERENCIA))
                        {

                         //   var ctx = db.inmuebles.First(inm => inm.REFERENCIA );
                            if (item2 != null)
                            {
                                if (item2.INMUESTADO.Equals("3"))
                                {
                                    item2.VAL_INMUEBLE = item.VAL_INMUEBLE;
                                    item2.AREA = item.AREA;
                                }
                                else
                                {
                                    item2.VAL_INMUEBLE = item.VAL_INMUEBLE;
                                    item2.INMUESTADO = item.INMUESTADO;
                                    item2.AREA = item.AREA;
                                  

                                }
                            }
                            else
                            {
                                return mensaje = "No fue realizar el proceso de actualización";
                            }
                        }
                       
                    }
                    else
                    {

                        var ctx = db.inmuebles.First(inm => inm.REFERENCIA == item.REFERENCIA && inm.INMUOBRA == b);
                        if (ctx != null)
                        {
                            if (ctx.INMUESTADO.Equals("3"))
                            {
                                ctx.VAL_INMUEBLE = item.VAL_INMUEBLE;
                                ctx.AREA = item.AREA;
                                db.SaveChanges();
                            }
                            else
                            {
                                ctx.VAL_INMUEBLE = item.VAL_INMUEBLE;
                                ctx.INMUESTADO = item.INMUESTADO;
                                ctx.AREA = item.AREA;
                                db.SaveChanges();

                            }
                        }
                        else
                        {
                            return mensaje = "No fue realizar el proceso de actualizacion";
                        }

                    }
                }
                  db.SaveChanges();
                return mensaje = "los inmuebles se actualizaron de manera exitosa";
            }
            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso"+ex;
                throw;
            }
        }


        /// <summary>
        /// Metodo retorna una lista de inmuebles 
        /// registrados para un proyectos especifico
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VInmuebles> LisInmueblesP(string p)
        {
            try
            {
                List<Vinmuebles> vimp = db.Vinmuebles.OrderBy(d => d.REFERENCIA).Where(t => t.ID_PROYEC == p).ToList();
                List<VInmuebles> Evimp = new List<VInmuebles>();
                if (vimp.Count().Equals(0))
                {

                    return Evimp;
                }
                else
                {
                    foreach (var item in vimp)
                    {
                        VInmuebles Vim = new VInmuebles();
                        Vim.INMUEBLE = item.INMUEBLE;
                        Vim.REFERENCIA = item.REFERENCIA;
                        Vim.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        Vim.AREA = item.AREA;
                        Vim.VAL_INMUEBLE = item.VAL_INMUEBLE;
                        Vim.INMUESTADO = item.INMUESTADO;
                        Evimp.Add(Vim);
                    }
                    return Evimp;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

        /// <summary>
        /// Metodo retorna una lista de los inmuebes dependiendo 
        /// de un un estado especificado
        /// </summary>
        /// <param name="op"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<VInmuebles> ListDisponibilidad(int op, string p)
        {
            switch (op)
            {
                case 0:
                    try
                    {
                        List<Vinmuebles> lisimdiS = db.Vinmuebles.Where(d => d.ID_BLOQUE == p && d.INMUESTADO !="3" && d.INMUESTADO!="1").ToList();
                        List<VInmuebles> Vimdisp = new List<VInmuebles>();
                        foreach (var item in lisimdiS)
                        {
                            VInmuebles disponible = new VInmuebles();
                            disponible.REFERENCIA = item.REFERENCIA;
                            disponible.INMUEBLE = item.INMUEBLE;
                            disponible.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                            disponible.AREA = item.AREA;
                            disponible.VAL_INMUEBLE = item.VAL_INMUEBLE;
                            disponible.INMUESTADO = item.INMUESTADO;
                            Vimdisp.Add(disponible);
                        }
                        return Vimdisp;
                    }
                    catch (Exception)
                    {

                        return null;
                    }


                    break;
                case 1:
                    try
                    {
                        var lisiO = GetEstado(p, "1");

                        List<VInmuebles> VimO = new List<VInmuebles>();
                        foreach (var item in lisiO)
                        {
                            VInmuebles separados = new VInmuebles();
                            separados.INMUEBLE = item.INMUEBLE;
                            separados.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                            separados.AREA = item.AREA;
                            separados.VAL_INMUEBLE = item.VAL_INMUEBLE; ;
                            separados.INMUESTADO = item.INMUESTADO;
                            VimO.Add(separados);
                        }
                        return VimO;
                    }
                    catch (Exception)
                    {
                        return null;
                    }
                    break;
                case 2:
                    try
                    {
                        var lisiS = GetEstado(p, "3");

                        List<VInmuebles> VimS = new List<VInmuebles>();
                        foreach (var item in lisiS)
                        {
                            VInmuebles inmD = new VInmuebles();
                            inmD.REFERENCIA = item.REFERENCIA;
                            inmD.INMUEBLE = item.INMUEBLE;
                            inmD.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                            inmD.AREA = item.AREA;
                            inmD.VAL_INMUEBLE = item.VAL_INMUEBLE;
                            inmD.INMUESTADO = item.INMUESTADO;
                            VimS.Add(inmD);
                        }
                        return VimS;
                    }
                    catch (Exception)
                    {
                        return null;
                    }
                    break;

                case 24:
                    try
                    {
                        var lisiS = GetEstado(p, "24");

                        List<VInmuebles> VimS = new List<VInmuebles>();
                        foreach (var item in lisiS)
                        {
                            VInmuebles inmD = new VInmuebles();
                            inmD.REFERENCIA = item.REFERENCIA;
                            inmD.INMUEBLE = item.INMUEBLE;
                            inmD.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                            inmD.AREA = item.AREA;
                            inmD.VAL_INMUEBLE = item.VAL_INMUEBLE;
                            inmD.INMUESTADO = item.INMUESTADO;
                            VimS.Add(inmD);
                        }
                        return VimS;
                    }
                    catch (Exception)
                    {
                        return null;
                    }
                    break;
            }
            return null;
        }

        /// <summary>
        /// Metodo Retorna una lista de inmuebles
        /// selccionados por  manzana,proyecto ingresado a CRM ordenado de manera ASC
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<EntiInmueble> LisInmueblesB(string b)
        {
            try
            {
                List<inmuebles> lisImn = db.inmuebles.OrderBy(l => l.INMUEBLE).Where(t => t.INMUOBRA == b).ToList();
                List<EntiInmueble> LsImb = new List<EntiInmueble>();
                if (lisImn.Count.Equals(0))
                {

                    return LsImb;
                }
                else
                {
                    foreach (var item in lisImn)
                    {
                        EntiInmueble LinmB = new EntiInmueble();
                        LinmB.INMUOBRA = item.INMUOBRA;
                        LinmB.REFERENCIA = item.REFERENCIA;
                        LinmB.INMUDECS = item.INMUDECS;
                        LinmB.INMUEBLE = item.INMUEBLE;
                        LinmB.AREA = item.AREA;
                        LinmB.VAL_INMUEBLE = item.VAL_INMUEBLE;
                        LsImb.Add(LinmB);
                    }

                    return LsImb;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }

       /// <summary>
       /// busca los estados de los inmuebles por un estado y un bloque en especifico
       /// </summary>
       /// <param name="p"></param>
       /// <param name="e"></param>
       /// <returns></returns>
        protected List<Vinmuebles> GetEstado(string p, string e)
        {
            try
            {
                if (e.Equals("24")) {

                    List<Vinmuebles> vim = db.Vinmuebles.Where(d => d.ID_BLOQUE == p ).ToList();
                    if (vim.Count().Equals(0))
                    {
                        return vim;
                    }
                    else
                    {
                        return vim;

                    }

                }
                else {
                    List<Vinmuebles> vim = db.Vinmuebles.Where(d => d.ID_BLOQUE == p && d.INMUESTADO == e).ToList();
                    if (vim.Count().Equals(0))
                    {
                        return vim;
                    }
                    else
                    {
                        return vim;

                    }
                }
            }
            catch (Exception)
            {

                throw;
            }

        }

        /// <summary>
        /// Meotodo para actualizar estado de inmueble a separado
        /// </summary>
        /// <param name="s"></param>
        /// <param name="i"></param>
        /// <param name="c"></param>
        /// <returns></returns>
        public int SepararInmueble(inmueble_separacion s, string email) {
            try
            {
                 var result = "";
                  var ctx=db.inmuebles.First(d => d.REFERENCIA == s.INMUEBLE);
                  if (ctx != null)
                  {
                      result = inmuSeparacion(s);
                      if (result.Equals("P"))
                      {
                          return 2;
                      }
                      else 
                      {
                         
                          ctx.INMUESTADO = "3";
                          db.SaveChanges();

                       //   EnviarConfirmacion(email,s.CLIENTE);
                          return 1;
                      }
                    }
                  else
                  {
                      return 2;
                  }
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }
        
        /// <summary>
        /// Metodod para anexar al historial del cliente 
        /// las separaciones de inmuebles que ha realizado
        /// </summary>
        /// <param name="s"></param>
        /// <param name="estado"></param>
        protected void Hsepracion_Clientes(inmueble_separacion s,string op) {
            try
            {
                 user = Membership.GetUser().ToString();
                 historial_clientes historial = new historial_clientes();
                 historial.TRABAJADOR = Convert.ToString(user);
                 historial.CLIENTEH = s.CLIENTE;
                 switch (op)
                 { 
                     case "S":
                         historial.DESCRIPCIONH = "El cliente ha separado el inmueble" + " " + s.INMUEBLE;
                         break;
                     case "D":
                         historial.DESCRIPCIONH = "El cliente ha desistido del  inmueble" + " " + s.INMUEBLE;
                         break;
                     case "L":
                         historial.DESCRIPCIONH = "El ha inicado el proceso de compra del  inmueble" + " " + s.INMUEBLE;
                         break;
                 }
                 historial.FECHA = DateTime.Now;
                 db.historial_clientes.Add(historial);
                 db.SaveChanges();
            }
            catch (Exception)
            {
                
                throw;
            }
        }    

      
        protected string inmuSeparacion(inmueble_separacion s)
        {
            try
            {
                var ctx = db.inmueble_separacion.Where(c => c.CLIENTE == s.CLIENTE && c.ESTADO=="P").ToList();
                if (ctx != null)
                {
                    user = Membership.GetUser().ToString();
                    s.ASESOR_T = user;
                    s.ESTADO = "P";
                    db.inmueble_separacion.Add(s);
                    Hsepracion_Clientes(s, "S");
                    Historial_inmuebles(s, "S");
                    db.SaveChanges();
                    return "OK";
                 }
                else
                {
                  return "P";
                }
                
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Metodo para anexar al historial del inmuebles
        /// </summary>
        /// <param name="s"></param>
        protected void Historial_inmuebles(inmueble_separacion s,string op) {
            try
            {
                historial_inmueble hm = new historial_inmueble();
                hm.CLIENTE = s.CLIENTE;
                hm.INMUEBLE = s.INMUEBLE;
                switch (op)
                {
                   case "S":
                     hm.DESCRIPCION_S = "El cliente ha iniciado el proceso de  separacion del inmueble " + hm.INMUEBLE;
                   break;
                   case "D":
                     hm.DESCRIPCION_S = "El cliente ha decistido el proceso de separacion del inmueble " + hm.INMUEBLE;
                   break;
                   case "L":
                   hm.DESCRIPCION_S = "El cliente ha inicado el proceso de compra del inmueble " + hm.INMUEBLE;
                   break;
                }
                hm.FECHA = DateTime.Now;
                db.historial_inmueble.Add(hm);
                db.SaveChanges();
            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Meotod para enviar correo a persona q ha iniciado 
        /// proceso de separacion de algun inmueble
        /// </summary>
        /// <param name="email"></param>
        protected void EnviarConfirmacion(string email,string cliente) {
            var ctx = db.trabajadores.ToList();
            var _CodS = db.VCod_SP.Where(sp => sp.CLIENTE == cliente).ToList();
           /// db.inmueble_separacion.Where(c => c.CLIENTE == cliente).Max(i => i.ID_SEPARACION);
            string emailAs = null;
            string cuerpo = null;
            string Cod_Sp = "";
            foreach (var item in ctx)
            {
                if (item.TIPO.Equals("JV"))
                {
                    emailAs = item.EMAIL;
                }
            }

            foreach (var item in _CodS)
            {
                Cod_Sp = item.COD + item.INMU;
            }
            MailMessage mmsg = new MailMessage();
            mmsg.To.Add(email);
            mmsg.Subject = "Constructora los mayales";
            mmsg.SubjectEncoding = System.Text.Encoding.UTF8;
            mmsg.Bcc.Add(emailAs);
            cuerpo = "<h4>Apreciado cliente,</h4>";
            cuerpo += "<p style='text-align:justify'>"+
            "Con gran satisfacción le informamos que se ha iniciado el proceso de separación de su vivienda en "+
            "Constructora Los Mayales S.A.  Le recordamos que tiene 5 días calendario, a partir de ahora, para hacerla efectiva.</p>";
            cuerpo += "</br>"; 
            cuerpo += "<p>Cordial saludo,</p>";
            cuerpo += "</br>";
            cuerpo += "<p>Xiomara Gonzalez,";
            cuerpo += "Directora de ventas";
            cuerpo += "</p>";
            cuerpo += "<p>María Victoria Ariza,";
            cuerpo += "Directora de Mercadeo";
            cuerpo+= "</p>";
            cuerpo += "</br>";
            cuerpo += "<h5 style='color:red'>Codigo de separacion es: "+Cod_Sp+"</h5>";
            cuerpo += "</br>";
            AlternateView htmlView = AlternateView.CreateAlternateViewFromString("'<html><body>"+cuerpo+"</body></html>'<img src=cid:companylogo>", null, "text/html");
            //create the LinkedResource (embedded image)
            LinkedResource logo = new LinkedResource("C:\\logo.png");
            logo.ContentId = "companylogo";
            //add the LinkedResource to the appropriate view
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

        /// <summary>
        /// Metodo muestra detalles de los inmuebles
        /// separados para un cliente
        /// </summary>
        /// <param name="inmueble"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion> Detalleseparacion(string inmueble){

            try
            {
                List<Vdetallesp> detalle = db.Vdetallesp.Where(t => t.REFERENCIA == inmueble).ToList();
                List<Vdetalleseparacion> Ldetalle = new List<Vdetalleseparacion>();
                if (detalle.Count.Equals(0))
                {
                    return Ldetalle;
                }
                else
                {
                    foreach (var item in detalle)
                    {
                        Vdetalleseparacion detalles = new Vdetalleseparacion();
                        detalles.NOMBRES = item.NOMBRES;
                        detalles.P_APELLIDO = item.P_APELLIDO;
                        detalles.S_APELLIDO = item.S_APELLIDO;
                        detalles.TELEFONO2 = item.TELEFONO2;
                        detalles.FECHASEPARACION = item.FECHASEPARACION;
                        detalles.DIRECCION = item.DIRECCION;
                        detalles.FECHAFINAL = item.FECHAFINAL;
                        detalles.INMUDECS = item.INMUDECS;
                        detalles.NOMBRE_BLO = item.NOMBRE_BLO;
                        detalles.INMUEBLE = item.INMUEBLE;
                        Ldetalle.Add(detalles);
                    }
                    return Ldetalle;
                }
            }
            catch (Exception)
            {
                
                throw;
            }
            
        }
         
        /// <summary>
        /// Meotodo retorna una lista de sepraciones por proyecto y el asesor activo en
        /// sistema
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> Lisepracion(string p) {
                try
                {   user = Membership.GetUser().ToString();
                    List<Vsepracioninmuebles> lis = db.Vsepracioninmuebles.Where(l => l.ASESOR == user && l.ID_PROYEC==p && l.ESTADO !="D" && l.ESTADO!="L").ToList();
                    List<Vdetalleseparacion.SepracionInmueble> Lseparados = new List<Vdetalleseparacion.SepracionInmueble>();
                    if (lis.Count.Equals(0))
                    {
                        return Lseparados;
                    }
                    else
                    {
                        foreach (var item in lis)
                        {   
                            Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                            separacion.ID_S = item.ID_SEPARACION;
                            separacion.CLIENTE = item.CLIENTE;
                            separacion.NOMBRES = item.NOMBRES;
                            separacion.P_APELLIDO = item.P_APELLIDO;
                            separacion.S_APELLIDO = item.S_APELLIDO;
                            separacion.DIRECCION = item.DIRECCION;
                            separacion.BARRIO = item.BARRIO;
                            separacion.FECHASEPARACION = item.FECHASEPARACION;
                            separacion.FECHAFINAL = item.FECHAFINAL;
                            separacion.TELEFONO2 = item.TELEFONO2;
                            separacion.INMUEBLE = item.INMUEBLE;
                            separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                            DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                            separacion.DIAS = DIAS_TR;
                            separacion.ESTADO = item.ESTADO;
                            Lseparados.Add(separacion);
                        }
                        return Lseparados;
                    }
                }
                catch (Exception)
                {
                    
                    throw;
                }
            }

        /// <summary>
        /// Metodo para listar los clientes con porcesos de separacion 
        /// de inmuebles
        /// </summary>
        /// <returns></returns>
        public List<Vdetalleseparacion.SepracionInmueble> Sepracionclientes() {
            try
            {
                List<Vsepracioninmuebles> lis = db.Vsepracioninmuebles.ToList();
                    List<Vdetalleseparacion.SepracionInmueble> Linmuebles = new List<Vdetalleseparacion.SepracionInmueble>();
                    if (lis.Count.Equals(0))
                    {
                        return Linmuebles;
                    }
                    else
                    {
                        foreach (var item in lis)
                        {
                            Vdetalleseparacion.SepracionInmueble separacion = new Vdetalleseparacion.SepracionInmueble();
                            separacion.ID_S = item.ID_SEPARACION;
                            separacion.CLIENTE = item.CLIENTE;
                            separacion.NOMBRES = item.NOMBRES;
                            separacion.P_APELLIDO = item.P_APELLIDO;
                            separacion.S_APELLIDO = item.S_APELLIDO;
                            separacion.DIRECCION = item.DIRECCION;
                            separacion.BARRIO = item.BARRIO;
                            separacion.FECHASEPARACION = item.FECHASEPARACION;
                            separacion.FECHAFINAL = item.FECHAFINAL;
                            separacion.TELEFONO2 = item.TELEFONO2;
                            separacion.INMUEBLE = item.INMUEBLE;
                            separacion.NOMBRE_PROYEC = item.NOMBRE_PROYEC.Trim();
                            DIAS_TR = Convert.ToInt32(item.DIAS - item.DIAS_T);
                            separacion.CASA = item.NOMBRE_BLO.Trim() + " " + item.CASA.Trim();
                            separacion.DIAS = DIAS_TR;
                            separacion.ESTADO = item.ESTADO;
                            Linmuebles.Add(separacion);
                        }
                        return Linmuebles;
                    }
            }
            catch (Exception)
            {
                
                throw;
            }

        }
        /// <summary>
        /// Metodo para liberar inmuebles
        /// </summary>
        /// <param name="inm"></param>
        /// <returns></returns>
        public string Desistimiento(inmueble_separacion i)
        {
            try
            {
                inmueble_separacion ctx = db.inmueble_separacion.OrderByDescending(o=> o.ID_SEPARACION).First(l => l.CLIENTE == i.CLIENTE);
                ///db.inmueble_separacion.Remove(ctx);
                ctx.ESTADO = "D";
                Hsepracion_Clientes(i, "D");
                Historial_inmuebles(i, "D");
                LiberarInmueble(i.INMUEBLE);
                db.SaveChanges();
                return mensaje = "El inmueble " + i.inmuebles + " a sido liberado de manera exitosa";
            }
            catch (Exception)
            {
                return mensaje = "No se pudo llevar a cabo el proceso de desistimiento del inmueble "+i.INMUEBLE+"";
                throw;
            }

        }

        
        private void LiberarInmueble(string r) {
            try
            {
                var ctx=db.inmuebles.First(d => d.REFERENCIA == r);
                if(ctx!= null)
	            {
                    ctx.INMUESTADO = "2";
                    db.SaveChanges();
                }
            }
            catch (Exception)
            { 
                
                throw;
            }

        }

        /// <summary>
        /// Meotodo para confirmar la separacion del inmueble
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int Confirmarseparacion(int id,inmueble_separacion i){
            try
            {
                var ctx = db.inmueble_separacion.First(r => r.ID_SEPARACION == id);
                if (ctx != null)
                {
                    ctx.ESTADO = "L";
                    Historial_inmuebles(i, "L");
                    Hsepracion_Clientes(i, "L");
                    db.SaveChanges();
                    return 1;
                }
                else
                {

                    return 0;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    
        }

    }
