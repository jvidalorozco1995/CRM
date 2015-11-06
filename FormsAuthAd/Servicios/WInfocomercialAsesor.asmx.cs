using BLLCRM;
using Entity;
using Entity.VProyectos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WInfocomercialAsesor
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WInfocomercialAsesor : System.Web.Services.WebService
    {
       BLLInfocomercialAse infa = new BLLInfocomercialAse();

         [WebMethod]
        public List<EntiClientes> LisAsesor(string t)
        {
            return infa.AsesoresClientes(t);
        }

         [WebMethod]
         public List<VinteresProyecto> Asesorproyect(string t)
         {
             return infa.AsesorProyectos(t);
         }


         [WebMethod]
         public List<VinteresProyecto> AsesorFechas(string t, DateTime fechaini, DateTime fechafin)
         {
             return infa.AsesorClientesFechas(t,fechaini,fechafin);
         }

         [WebMethod]
         public List<VinteresProyecto> AsesorProyectosFechas(string t, DateTime fechaini, DateTime fechafin)
         {
             return infa.AsesorProyectosFechas(t, fechaini, fechafin);
         }
    }
}
