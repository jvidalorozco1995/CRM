using System;
using System.Text;
using System.Collections;
using System.DirectoryServices;
using Entity;

namespace FormsAuth
{
    public class LdapAuthentication
    {
        private String _path;
        
        private String _filterAttribute;

        public LdapAuthentication(String path)
        {
            _path = path;
        }

        public bool IsAuthenticated(String username, String pwd)
        {
            String domainAndUsername = "Mayales"+"\\" + username;
            DirectoryEntry entry = new DirectoryEntry(_path, domainAndUsername,pwd);
            entry.Username = username;
            entry .Password = pwd;
            entry.AuthenticationType = AuthenticationTypes.Secure;
            try
            {	//Bind to the native AdsObject to force authentication.			
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
                //Update the new path to the user in the directory.
                _path = result.Path;
                _filterAttribute = (String)result.Properties["cn"][0];
            }
            catch (Exception)
            {
                throw;
            }
            return true;
        }

        public string GetGroups()
        {

            return "Mayales";
        }
    }
}