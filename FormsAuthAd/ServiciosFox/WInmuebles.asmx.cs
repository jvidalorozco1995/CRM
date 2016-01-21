using BLLCRM;
using DAL;
using Entity;
using Entity.VInmuebles;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.ServiciosFox
{
    /// <summary>
    /// Descripción breve de WInmuebles
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WInmuebles : System.Web.Services.WebService
    {
        BLLInmuebles inm = new BLLInmuebles();
        

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VInmuebles> GetInmuebles(string p)
        {
            return inm.LisInmueblesP(p);

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiInmueble> ListImnueblesBlo(string b)
        {
            return inm.LisInmueblesB(b);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertInmuCrm(List<inmuebles> i, string b)
        {
            return inm.InsertInmuebles(i, b);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VInmuebles> InmuEstados(int op, string p)
        {
            return inm.ListDisponibilidad(op, p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int SepararInmueble(inmueble_separacion s,string email)
        {

            return inm.SepararInmueble(s,email);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion> Detalleseparacion(string inmueble) {

            return inm.Detalleseparacion(inmueble);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateInmuCrm(List<inmuebles> i, string b)
        {
            return inm.UpdateInmuebles(i, b);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> Listadosepracion(string p)
        {
            return inm.Lisepracion(p);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string DesistirInmueble(inmueble_separacion i)
        {
            return inm.Desistimiento(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> ClientesInmuebles()
        {
            return inm.Sepracionclientes();
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<NegociosFox> insery()
        {
            
            return fx.ConsulNegocio();
        }
        
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<AcuerdoFox> LISTADO()
        {
            ConecFox fx = new ConecFox();
            return fx.ConsulAcuerdoPago().ToList();
        }
        ConecFox fx = new ConecFox();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<PagosFox> listPagosFox(string refe)
        {

           return fx.ConsultPagosFox(refe).ToList();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void AcuerdoFox()
        {
              InsertAcuerdo(fx.ConsulAcuerdoPago());
            
        }

    
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string TODO()
        {
            try {

               InsertNegocio(fx.ConsulNegocio());
               InsertAcuerdo(fx.ConsulAcuerdoPago());

               BLLNegocioFox hn = new BLLNegocioFox();
               var listneg =  hn.NegociosFoxCRM();
               foreach (var item in listneg) {
                  //Lista de pagos por referencia o negocio 
                  var listapag = listPagosFox(item.SUCURSAL + item.NEGOCIO);

                  foreach (var list in listapag) {

                      InsertPago(list);
                       
                  }
             
               }
               
               return "1";
            }
            catch (Exception ex) {
              
              return ex.ToString();
            }
            
        }

        public string InsertNegocio(List<NegociosFox> ac)
        {
            try
            {
                BLLNegocioFox hn = new BLLNegocioFox();
                return hn.Hojanegocio(ac);

            }catch(Exception ex){

                return ex.ToString();
            }
        }

        public string InsertPago(PagosFox ac)
        {
            try
            {
                BLLPagosFox hn = new BLLPagosFox();
                return hn.Pagos(ac);
            }
            catch (Exception ex) {

                return ex.ToString();
            }
        }

        public string InsertAcuerdo(List<AcuerdoFox> ac)
        {
            try
            {
                BLLAcuerdoFox hn = new BLLAcuerdoFox();
                return hn.Acuerdo(ac);
            }
            catch (Exception ex) 
            {
                return ex.ToString();
            }
        }
    }
}
