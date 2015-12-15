using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BLLCRM;
using DAL;
using Entity.VsFox;
namespace FormsAuthAd.ServiciosFox
{
    /// <summary>
    /// Summary description for WAcuerdosFox
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WAcuerdosFox : System.Web.Services.WebService
    {
        ConecFox fx = new ConecFox();

        [WebMethod]
        public void AcuerdoFox()
        {
            InsertAcuerdo(fx.ConsulAcuerdoPago());
        }


        public void InsertAcuerdo(List<AcuerdoFox> ac)
        {
            BLLAcuerdoFox hn = new BLLAcuerdoFox();
            hn.Acuerdo(ac);
        }

    }
}
