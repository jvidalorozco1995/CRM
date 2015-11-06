using BLLCRM;
using Entity;
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
    /// Descripción breve de Winfocomercial
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class Winfocomercial : System.Web.Services.WebService
    {
        BLLInfocomercial info = new BLLInfocomercial();

        [WebMethod]
        public List<VTareasTrab> Infotareas()
        {
            return info.InfoTareas();
        }

        [WebMethod]
        public List<VTareasTrab> InfoProyectos(string p)
        {
            return info.InfoProyecto(p);
        }

        [WebMethod]
        public List<VTareasTrab> InfoAsesor(string a)
        {
            return info.InfoTrabajador(a);
        }

        [WebMethod]
        public List<EntiClientes> LisclientesFechas(DateTime fechaini, DateTime fechafin)
        {
            return info.ClientesFechas(fechaini, fechafin);

        }

        [WebMethod]
        public List<EntiClientes> LisclientesT()
        {
            return info.ClientesFechasT();
        }

        [WebMethod]
        public List<EntiClientes> LisclientesAsesores()
        {
            return info.ClientesAsesores();
        }

        [WebMethod]
        public List<VinteresProyecto> Lisclientesproyectos()
        {
            return info.ClientesProyectos();
        }


        [WebMethod]
        public List<EntiTareas> FechaTareascliente(DateTime inicio, DateTime fin)
        {
            return info.ContareaFechas(inicio,fin);
        }

        [WebMethod]
        public List<EntiClientes> FechacliteAsesor(DateTime inicio, DateTime fin)
        {
            return info.FechasAsesoresCliente(inicio, fin);
        }

        [WebMethod]
        public List<EntiClientes> FechaRango(DateTime inicio, DateTime fin)
        {
            return info.FechasFechasra(inicio, fin);
        }

        [WebMethod]
        public List<EntiClientes> FechaRangoProyectos(DateTime inicio, DateTime fin)
        {
            return info.FechasProyectosCl(inicio, fin);
        }


    }
}
