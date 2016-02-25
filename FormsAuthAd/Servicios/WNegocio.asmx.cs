using BLLCRM;
using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Descripción breve de WNegocio
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WNegocio : System.Web.Services.WebService
    {
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string DatoNegocio(negocio n,string inm , List<acuerdo_pago> ac)
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.Hojanegocio(n,inm,ac);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Entinegocio> lisHoja(string idhoja) 
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.lisHoja(idhoja);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Entinegocio> lisAllHoja()
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.lisAllHoja();
        }
        [WebMethod]
        public List<Entiacuerdo_pago> _Acuerdopago(string ac)
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.Lisacuerdop(ac);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateUsuarioCartera(int id, string USER_CARTERA)
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.UpdateUsuarioCartera(id,USER_CARTERA);

        }
        
    }
}
