using BLLCRM;
using Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FormsAuthAd
{
    public partial class Logon : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Login_Click(object sender, EventArgs e)
        {
            /*Clase de membership*/
            SecurityUser ad = new SecurityUser();
            /*Valida si existe el CRM*/
            var resul = ad.ValuserShip(txtUsername.Text);
            if (resul.Equals(true))
            {
                String adPath = "LDAP://192.168.0.5/OU=MAYALES,DC=mayales,DC=local"; //direccion del dominio 
                FormsAuth.LdapAuthentication adAuth = new FormsAuth.LdapAuthentication(adPath);
                try
                {
                    /*Autentificacion en membership*/
                    if (true == adAuth.IsAuthenticated(txtUsername.Text, txtPassword.Text))
                    {
                        String groups = adAuth.GetGroups();

                        //crea un ticket y añade el grupo
                        //bool isCookiePersistent = chkPersist.Checked;
                        FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket(1, txtUsername.Text,
                        DateTime.Now, DateTime.Now.AddMinutes(60), false, groups);

                        //encripta el tiket. 
                        String encryptedTicket = FormsAuthentication.Encrypt(authTicket);

                        //Creador de una cookie, y entonces añade la key encriptada a la cookie y ala data 
                        HttpCookie authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);

                        //if(true == isCookiePersistent)
                        authCookie.Expires = authTicket.Expiration;

                        //añade la cookie a la coleccion
                        Response.Cookies.Add(authCookie);
                        BLLHistorialIngreso his = new BLLHistorialIngreso();
                        his.InsertHistorial(txtUsername.Text);
                        //redireccion
                        Response.Redirect(FormsAuthentication.GetRedirectUrl(txtUsername.Text, false));
                    }
                    else
                    {   /*error label cuando la contraseña sea incorrecta*/
                        errorLabel.Text = "Verifique por favor el usuario y contraseña";
                    }
                }
                catch (Exception ex)
                {
                    /*Envia una excepcion cuando falla la autentificiacion*/
                    errorLabel.Text = "Error de autenticación.  " + ex.Message;
                }
            }
            else
            {   /*Envia este mensaje cuando el usuario no tiene acceso a mayales*/
                errorLabel.Text = "El usuario no tiene Acceso a CRM - Mayales";
            }
           
        }
    }
}