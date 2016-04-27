using BLLCRM;
using DAL;
using Entity;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WTrabajador
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WTrabajador : System.Web.Services.WebService
    {

        BLLTrabajador Bt = new BLLTrabajador();
        /// <summary>
        /// Metodo para insertar trabajador
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertTrabajador(trabajadores t)
        {
            return Bt.CrearTrabajador(t);
        }

        /// <summary>
        /// Metodo para Asignar Proyecto a los trabajadores alamacenados en el sistema
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int AsignarProyectos(proyectos_trabajador t)
        {
            return Bt.AsignarProyecto(t);
        }

        /// <summary>
        /// Metodo retorna una lista de trabajadores almacenados en el sistema
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiTrabajadores> ListTrabajadores()
        {
            return Bt.GetTrabajadores();
        }
        

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> LisTAsesor(string t)
        {
            return Bt.getTareasAsesor(t);
        }

         [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> ListClientesAsesor(string t)
        {
            return Bt.ListClientesAsesor(t);
        }

         [WebMethod]
         [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
         public List<VTarCLientes> ListClientesAsesorAP(string p, string t)
         {
             return Bt.ListClientesAP(p,t);
         }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> ListClientesAsesorUSU(string p)
        {
            return Bt.ListClientesUSU(p);
        }
        
    }
}
