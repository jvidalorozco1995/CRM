using System;
using System.Collections.Generic;
using System.DirectoryServices;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLServer
{
    public class LdapAuthentication
    {
        //Obtiene la ruta
        private String _path;
        private String _filterAttribute;

        public LdapAuthentication(String path)
        {
            _path = path;
        }
        //verifica si esta autenticado
        public bool IsAuthenticated(String username, String pwd)
        {
            String domainAndUsername = @"\" + username;
            DirectoryEntry entry = new DirectoryEntry(_path, domainAndUsername, pwd);
            entry.Username = username;
            entry.Password = pwd;
            entry.AuthenticationType = AuthenticationTypes.Secure;
            try
            {	//recargar el objeto nativo		
                Object obj = entry.NativeObject;

                DirectorySearcher search = new DirectorySearcher(entry);
                ///"(&(objectClass=user)(ou=Admin Sistemas))"
                search.Filter = "(SAMAccountName=" + username + ")";
                search.PropertiesToLoad.Add("cn");
                SearchResult result = search.FindOne();

                if (null == result)
                {
                    return false;
                }

                //actualiza la nueva ruta en el directorio
                //_path = result.Path;
                _filterAttribute = (String)result.Properties["cn"][0];
            }
            catch (Exception ex)
            {
                throw new Exception("Error authenticating user. " + ex.Message);
            }
           return true;
        }

        public String GetGroups()
        {
            //retorna el nombre del grupo
            return "Mayales";
        }
    }
}
