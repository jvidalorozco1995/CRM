using BLLCRM;
using BLLServer;
using DAL;
using Entity;
using Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WServidores
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WServidores : System.Web.Services.WebService
    {
        /// <summary>
        /// Metodo retorna una lista obtenidos desde el servidor
        /// active directory
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<EntiServerUser> LisUser() {
            GetUserServer us= new GetUserServer();
            return us.UserSever();
        }


        /// <summary>
        /// Metodo para Insertar un usuario en la tabla user de membership
        /// </summary>
        /// <param name="u"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertUserShip(EntiServerUser u) {
            SecurityUser sh = new SecurityUser();
            return sh.InsertUserShip(u);
        }

        /// <summary>
        /// Metodo retorna listado de usuarios de MemberShip
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiServerUser> GetUSerShip() {

            SecurityUser gu = new SecurityUser();
            return gu.GetuserShip();
        }

        /// <summary>
        /// Validar usuarios de base de datos en membership
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public bool validarUserShip(string user) {
            SecurityUser vs = new SecurityUser();
            return vs.ValuserShip(user);

        }

        /// <summary>
        /// Meotodo para crear Rol en membership
        /// </summary>
        /// <param name="r"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool InsertRol(string r) {
            SecurityUser rol = new SecurityUser();
            return rol.CreateRoles(r);

        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiShip> LisRoles() { 
             SecurityUser gr = new SecurityUser();
             return gr.GetRoles(); 
           }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public bool AsignarPermiso(string user, string rol) {
            SecurityUser asg = new SecurityUser();
            return asg.AsignarPermiso(user, rol);

        }

        /// <summary>
        /// Meotodo retorna un listado de acceso para un asesor en especifio
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntiShip> ListAcceso(string user)
        {
            SecurityUser asg = new SecurityUser();
            return asg.listadoRolUser(user);

        }

        /// <summary>
        /// Metodo para meover acceso a un asesor a un rol
        /// </summary>
        /// <param name="user"></param>
        /// <param name="rol"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool RemoveAcceso(string user, string rol)
        {
            SecurityUser asg = new SecurityUser();
            return asg.RemoverAsesorRol(user, rol);

        }

        /// <summary>
        /// Metodo para remover usuario de membership
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public bool RemovUsuario(string user)
        {
            SecurityUser asg = new SecurityUser();
            return asg.RemoverAsesor(user);

        }



      }
    }

