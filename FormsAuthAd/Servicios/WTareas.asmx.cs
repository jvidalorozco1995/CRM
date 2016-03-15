using BLLCRM;
using DAL;
using Entity;
using Entity.VClientes;
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
    /// Descripción breve de WTareas
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WTareas : System.Web.Services.WebService
    {
        BLLTareas bt = new BLLTareas();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int InsertTarea(tareas c)
        {
            return bt.InsertTareas(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int InsertCompromiso(tareas c)
        {
            return bt.InsertCompromiso(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public void update()
        {
           bt.UpdateTareasEstados();
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTareasTrab> GetTareasC(string c)
        {
            return bt.GetTareas(c);
        }



        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VtareasNegocio> GetTareasNegocios(string c)
        {
            return bt.GestTareasNegocio(c);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VtareasNegocio> GetTareasCompromiso(string c)
        {
            return bt.GestTareasCompromiso(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<tareas> GetTareasCompromisoCO(string c)
        {
            return bt.GestTareasCompromisoCO(c);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTareasTrab> InfoTareas(int id)
        {
            return bt.GetTareaInfo(id);
        }
          [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VtareasNegocio> InfoTareasNego(int id)
        {
            return bt.GestTareasNego(id);
        }
        


        /// <summary>
        /// Retorna listado de tareas asignados a un trabajador
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTareasTrab> ListareasTra()
        {
            return bt.ListadoTareas();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int ETareas(tareas t,bitacora_tareas b) {

            return bt.TareaCompletada(t,b);
            
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int Postareas(tareas t, bitacora_tareas b)
        {
            return bt.PosponerTarea(t,b);

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiBitacoras> Historialtareas(int t) {

            return bt.BitacorasTareas(t);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTareasTrab> estamiacion(){

            return bt.EstimacionTareas();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTareasTrab> ListareasUserA()
        {

            return bt.ListadoTareasUser();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> ListaEstadoTareas(string estado)
        {

            return bt.EstadosTareas(estado);
        }

             [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> ListaEstadoTareasclientes(string estado)
        {

            return bt.EstadosTareasClientes(estado);
        }
        
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VclienteInmu> _lcgestion(string p, string e)
        {

            return bt._Lcgestion(p, e);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int Cancelargestion(bitacora_tareas b, string e, string c)
        {
            return bt._Cancelargestion(b, c, e);
        }
    }
}
