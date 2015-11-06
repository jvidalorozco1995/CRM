using BLLCRM;
using DAL;
using Entity;
using Entity.VInmuebles;
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
        public string UpdateInmuCrm(List<inmuebles> i,string b)
        {
            return inm.UpdateInmuebles(i,b);
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

    }
}
