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

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WSeparaciones
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WSeparaciones : System.Web.Services.WebService
    {
        BLLseparaciones sp = new BLLseparaciones();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _sepracionesAsesor(string asesor)
        {
            return sp.SepracionesAsesor(asesor);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _sepracionesproyecto(string p)
        {
            return sp.SepracioneProyectos(p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _sepracionesAP(string p,string asesor)
        {
            return sp.SepracioneAP(p,asesor);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _sepracionesFechas(DateTime inicio, DateTime fin)
        {
            return sp.SepracioneFechas(inicio, fin);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _sepracionesDetalle(string c)
        {
            return sp._Detalleseparacion(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiClientes> cliente(string c) {
            negocioR ng = new negocioR();
            return ng.GetCliente(c); 
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiClientes> Clienteactualiza(string c)
        {
            negocioR ng = new negocioR();
            return ng.GetClienteactualiza(c); 
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vdetalleseparacion.SepracionInmueble> _SeparacionLis(string p)
        {
            negocioR ng = new negocioR();
            return ng.Negocioseparacion(p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Bancos> _Bancos()
        {
            BLLseparaciones ng = new BLLseparaciones();
            return ng._Getbancos();
        }

        
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int _Confirmarseparacion(int id, inmueble_separacion i)
        {
            BLLInmuebles ng = new BLLInmuebles();
            return ng.Confirmarseparacion(id, i);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiClientes> _getAsociado(string c)
        {
            negocioR aso = new negocioR();
            return aso.Getasociado(c);
        }
    }
}
