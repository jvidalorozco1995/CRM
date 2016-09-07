using Entity;
using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.DirectoryServices.ActiveDirectory;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLServer
{
    public class GetUserServer
    {
       List<EntiServerUser> user = new List<EntiServerUser>();
        /// <summary>
        /// Retorna listado de usarios almacenado en servidor 
        /// iP= 192.168.0.5
        /// </summary>
        /// <returns></returns>
       public List<EntiServerUser> UserSever()
       {

           try
           {
               DirectoryEntry LdapConnection = createDirectoryEntry();
               DirectorySearcher ds = new DirectorySearcher(LdapConnection);
               ds.Filter = "(&(objectClass=user))";
               SearchResultCollection result = ds.FindAll();
               if (result != null)
               {
                   for (int i = 0; i < result.Count; i++)
                   {
                       EntiServerUser us = new EntiServerUser();
                       us.user = result[i].Properties["userPrincipalName"][0].ToString(); 
                       us.name = result[i].Properties["CN"][0].ToString();
                       user.Add(us);
                   }
                   return user;
               }
               else
               {
                   return null;
               }
           } 
           catch (DirectoryServicesCOMException){
              
               throw;
           }
           catch (InvalidOperationException){
               throw;
           }
           catch (NotSupportedException){
               throw;
           }
       }
       protected static DirectoryEntry createDirectoryEntry() {
          DirectoryEntry ldapConnection = new DirectoryEntry();
          ldapConnection.Path="LDAP://192.168.0.5/OU=MAYALES,DC=mayales,DC=local";
          ldapConnection.Username="administrador";
          ldapConnection.Password = "m4y4l3sSelayaM2014#";
          ldapConnection.AuthenticationType = AuthenticationTypes.Secure;
          return ldapConnection;
       }

    }
}

