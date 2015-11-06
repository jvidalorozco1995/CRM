using BLLCRM;
using DAL;
using Entity;
using Entity.VClientes;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WInfocomercialProyec
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WInfocomercialProyec : System.Web.Services.WebService
    {
        BLLInfoProyectos infp = new BLLInfoProyectos();

        [WebMethod]
        public List<VProyectosF> LisproyectosInteres(string p)
        {
            return infp.CLientesProyectos(p);  
        }

        [WebMethod]
        public List<EntiClientes> LisproyectosAsesor(string p)
        {
            return infp.AsesoresProyectos(p);
        }

        [WebMethod]
        public List<VTarCLientes> LisRangotareas(DateTime fechaini, DateTime fechafin, string proyecto)
        {
            return infp.RangoTareas(fechaini,fechafin,proyecto);
        }

        [WebMethod]
        public List<VrangoCLientes> LisPclientes(DateTime fechaini, DateTime fechafin, string proyecto)
        {
            return infp.RangoPclientes(fechaini, fechafin, proyecto);
        }

        [WebMethod]
        public List<VinteresProyecto> LisPAsesores(DateTime fechaini, DateTime fechafin, string proyecto)
        {
            return infp.RangoAsesoresP(fechaini, fechafin, proyecto);
        }
    }
}
