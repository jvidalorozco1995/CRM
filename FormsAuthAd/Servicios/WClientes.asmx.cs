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
    /// Descripción breve de WClientes
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WClientes : System.Web.Services.WebService
    {
        BLLClientes cl = new BLLClientes();
        
        /// <summary>
        /// Metodo para realizar la insercion de clientes
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertCliente(clientes c)
        {
            return cl.InsertCliente(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int _InsertClienteAs(clientes c)
        {
            return cl._InsertClienteAs(c);
        }
        /// <summary>
        /// Metodo rerorna un alista de clientes asigandos a un 
        /// trabajador especifico
        /// </summary>
        /// <param name="p"></param>
        /// <param name="a"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VclienteInmu> LisClientes(string p)
        {
            return cl.LisClientes(p);
        }

        /// <summary>
        /// Metodo retorna informacion perteneciente a un 
        /// cliente
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<EntiClientes> GetClientesT(string c)
        {
            return cl.GetClienteT(c);
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public string _ValidarClientes(string c)
        {
            return cl._Validarcliente(c);
        }

        /// <summary>
        /// Metodo para actualizar clientes
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int UpdateCLiente(clientes c) 
        {
            return cl.UpdateCliente(c);
        }

        /// <summary>
        /// Metodo Retorna listado total de clientes
        /// </summary>
        /// <returns></returns>

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<EntiClientes> LClientes() {
            return cl.LClientes();
        }

        /// <summary>
        /// retorna listado de cliente con relacion a su ultima tarea programada
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTarCLientes> ClienteTareas()
        {
            return cl.TareasCliente();
        }


        /// <summary>
        /// retorna listado de cliente con relacion a asesor
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<VTarCLientes> ClienteTareasUsuario()
        {
            return cl.TareasClienteUsuario();
        }

        /// <summary>
        /// Metodo retona el historial relacionado a algun cliente en especifico
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Historial>Historialcliente(string c){
            return cl.Historial_cliente(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VTarCLientes> ListClientesfechasAP(DateTime fechaini, DateTime fechafin)
        {
            return cl.LiscliFechaAP(fechaini, fechafin);
        } 
    }
}
