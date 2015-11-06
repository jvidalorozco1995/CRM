using BLLCRM;
using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.ServiciosFox
{
    /// <summary>
    /// Descripción breve de Wproyectos
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Wproyectos : System.Web.Services.WebService
    {
        BLLProyectos Py = new BLLProyectos();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiProyecto> LisProyectos()
        {
            return Py.ListaProyec();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertProyecFox(proyectos p)
        {
            return Py.InsertProyecFox(p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VProyeT> LisProyecTrabajador()
        {
            return Py.ListProyecT();
        }

        /// <summary>
        /// Retorna lista de proyectos asignados al trabajadpr
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VProyeT> LisTraProyectos(string p)
        {
            return Py.LtrabajadorProyec(p);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int DeleteAcceso(int p)
        {
            BLLProyectos dp = new BLLProyectos();
            return dp.DeleteAccesoP(p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int DeleteProyecto(string p)
        {
            return Py.RemoverProyectos(p);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiBloques> LisbloProyec(string b)
        {
            BLLBloques lisbp = new BLLBloques();
            return lisbp.ListBloquesPr(b);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<Entityplanos> LisPanosP(string p)
        {
            return Py.LisPlanos(p);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTarCLientes> Lisasesortarea(string p)
        {
            return Py.TareasClientetra(p);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<Vspt> ProyectosTrabajador()
        {
            return Py.getTrabajadorproyecto();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Addplanos(string p)
        {
            BLLPlanos pl = new BLLPlanos();
            return pl.AddPlano(p);
        }
    }

}
