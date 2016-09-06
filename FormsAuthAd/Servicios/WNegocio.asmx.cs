using BLLCRM;
using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Globalization;
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
        public string DatoNegocio(negocio n,string inm , List<acuerdo_pago> ac, List<acuerdo_pago_banco> acg)
        {
            BLLnegocio hn = new BLLnegocio();
            foreach (var item in ac) {


              
                item.NO_ACUERDO = n.ID_NEGOCIO;
                item.FECHA_PAGO = item.FECHA_PAGO;
                item.CUOTA = item.CUOTA;

                decimal a;
                if (decimal.TryParse(item.VALOR_CUOTA.ToString(), NumberStyles.Number, CultureInfo.InvariantCulture, out a))
                {
                    // NumberStyles.Number: AllowLeadingWhite, AllowTrailingWhite, AllowLeadingSign,
                    // AllowTrailingSign, AllowDecimalPoint, AllowThousands
                    item.VALOR_CUOTA = a;
                }
                
            }
            foreach (var item in acg)
            {



                item.NO_ACUERDO = n.ID_NEGOCIO;
                item.FECHA_PAGO = item.FECHA_PAGO;
                item.CUOTA = item.CUOTA;

                decimal a;
                if (decimal.TryParse(item.VALOR_CUOTA.ToString(), NumberStyles.Number, CultureInfo.InvariantCulture, out a))
                {
                    // NumberStyles.Number: AllowLeadingWhite, AllowTrailingWhite, AllowLeadingSign,
                    // AllowTrailingSign, AllowDecimalPoint, AllowThousands
                    item.VALOR_CUOTA = a;
                }

            }


            return hn.Hojanegocio(n,inm,ac,acg);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string DatoNegocioupdate(negocio n, string inm, List<acuerdo_pago> ac, List<acuerdo_pago_banco> acg)
        {
            BLLnegocio hn = new BLLnegocio();
            foreach (var item in ac)
            {
                
                item.NO_ACUERDO = n.ID_NEGOCIO;
                item.FECHA_PAGO = item.FECHA_PAGO;
                item.CUOTA = item.CUOTA;

                decimal a;
                if (decimal.TryParse(item.VALOR_CUOTA.ToString(), NumberStyles.Number, CultureInfo.InvariantCulture, out a))
                {
                    // NumberStyles.Number: AllowLeadingWhite, AllowTrailingWhite, AllowLeadingSign,
                    // AllowTrailingSign, AllowDecimalPoint, AllowThousands
                    item.VALOR_CUOTA = a;
                }

            }
            foreach (var item in acg)
            {

                item.NO_ACUERDO = n.ID_NEGOCIO;
                item.FECHA_PAGO = item.FECHA_PAGO;
                item.CUOTA = item.CUOTA;

                decimal a;
                if (decimal.TryParse(item.VALOR_CUOTA.ToString(), NumberStyles.Number, CultureInfo.InvariantCulture, out a))
                {
                    // NumberStyles.Number: AllowLeadingWhite, AllowTrailingWhite, AllowLeadingSign,
                    // AllowTrailingSign, AllowDecimalPoint, AllowThousands
                    item.VALOR_CUOTA = a;
                }

            }

            return hn.Updatenegocio(n, inm, ac,acg);
        }

        
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Entinegocio lisHoja(string idhoja) 
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
        public List<Entiacuerdo_pago> _Acuerdopagogas(string ac)
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.Lisacuerdopgas(ac);
        }
        //[WebMethod]
        //public List<Entiacuerdo_pagosg> _Acuerdopagogas(string ac)
        //{
        //    BLLnegocio hn = new BLLnegocio();
        //    return hn.Lisacuerdopg(ac);
        //}
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateUsuarioCartera(int id, string USER_CARTERA)
        {
            BLLnegocio hn = new BLLnegocio();
            return hn.UpdateUsuarioCartera(id,USER_CARTERA);
        }
        
    }
}
