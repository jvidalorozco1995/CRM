using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace Security
{
    public class SecurityUser
    {
        /// <summary>
        /// Meotodo para insertar usuarios en membership
        /// </summary>
        /// <param name="u"></param>
        /// <returns></returns>
        public int InsertUserShip(EntiServerUser u)
        {

            try
                /*Crea el contexto para obtener el usuario*/
            {   var ctx = Membership.GetUser(u.user);
                if (ctx != null)
                {
                   return 0;
                }
                else
                {
                    /*Crea un nuevo usuario con la contraseña por defecto*/
                    MembershipUser newUser = Membership.CreateUser(
                    u.user,
                    u.password + "#1234",
                    u.email);
                    return 1;
                }
              }
            catch (MembershipCreateUserException)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Metodo retorna lista de suario de membership
        /// </summary>
        /// <returns></returns>
        public List<EntiServerUser> GetuserShip() {
            try
            {   //lista de usuarios
                List<EntiServerUser> usuario = new List<EntiServerUser>();
                //obtener todos los usuarios de membership
                MembershipUserCollection users = Membership.GetAllUsers();
                if (users.Count.Equals(0))
                {
                    return null;
                }
                else
                {
                    //recorrer los usuarios
                    foreach (var item in users)
                    {
                        EntiServerUser sh = new EntiServerUser();
                        sh.user = item.ToString();
                        usuario.Add(sh);
                    }
                    return usuario;
                }      
            }
            catch (Exception)
            {
                   
                throw;
            }
        }

        /// <summary>
        /// Metodo  Bool retorna un true
        /// si el registro es exitoso
        /// </summary>
        /// <param name="Rol"></param>
        /// <returns></returns>
        public bool CreateRoles(string Rol) {
           try
           {
               /*si el rol no existe*/
             if (!System.Web.Security.Roles.RoleExists(Rol)) 
             { 
                  
                 /*Creamos un nuevo rol*/
                System.Web.Security.Roles.CreateRole(Rol);
                return true;
            }
            else
            {   
                 //ret
                return false;
            }
            }
            catch (Exception)
            {
                //excepcion
                throw;
            }
        }

        /// <summary>
        /// Metodo para validar usuario
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool ValuserShip(string user) {
            try
            {    //valida si el usuario existe
                var datos = Membership.GetUser(user);
                if (datos != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (System.ArgumentException)
            {
                throw;
            }
            
       }

        /// <summary>
        /// Metodo retorna listado de roles almacenados en la base de datos
        /// </summary>
        /// <returns></returns>
        public List<EntiShip> GetRoles() {
             string [] roles;
            roles = Roles.GetAllRoles();
            List<EntiShip> Lroles = new List<EntiShip>();
            if (roles != null)
            {
                for (int i = 0; i < roles.Length; i++)
                {
                    EntiShip r = new EntiShip();
                    r.roles = roles[i].ToString();
                    Lroles.Add(r);
                }
                return Lroles;
            }
            else 
            {
                return null;
            }
        }

        /// <summary>
        /// Metodo para asignar permisos a usarios
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="rol"></param>
        /// <returns></returns>
        public bool AsignarPermiso(string usuario, string rol) {
            try
              {
                /*Asigna permisos al rol*/
                Roles.AddUserToRole(usuario, rol);
                return true;
                
             }
            catch (Exception)
            {
                return false;
                throw;
            }
        }

        /// <summary>
        /// Metodo para remover asesor memebership
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool RemoverAsesorRol(string user,string rol) {

            try
            {
                /*remueve el rol del usuario*/
                Roles.RemoveUserFromRole(user, rol);
                return true;
            }
            catch (Exception)
            {
                //envia una excepción y retorna falso
                return false;
                throw;
            }
        }

        /// <summary>
        /// Retorna listado de perimisos a lo q tiene acceso el usuario
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public List<EntiShip> listadoRolUser(string user) {
            try
            {
                //obtiene una lista de roles
                string[] roles;
                roles = Roles.GetRolesForUser(user);
                List<EntiShip> Lroles = new List<EntiShip>();
                if (roles != null)
                {
                    for (int i = 0; i < roles.Length; i++)
                    {
                        //añade los roles a una lista
                        EntiShip r = new EntiShip();
                        r.roles = roles[i].ToString();
                        Lroles.Add(r);
                    }
                    return Lroles;
                }
                else
                {
                    //retorna null
                    return null;
                }

            }
            catch (Exception)
            {
                
                throw;
            }
        }

        /// <summary>
        /// Metodo para remover asesor memebership
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public bool RemoverAsesor(string user)
        {
          try
            {
                //elimina el usuario
                Membership.DeleteUser(user);
                return true;
            }
            catch (Exception)
            {
                return false;
                throw;
            }
        }
    }
}
