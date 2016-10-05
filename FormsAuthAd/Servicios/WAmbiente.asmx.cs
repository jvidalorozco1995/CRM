using BLLCRM;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Summary description for WAmbiente
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WAmbiente : System.Web.Services.WebService
    {
        BLLAmbiente cl = new BLLAmbiente();
        BLLItems it = new BLLItems();
        BLLAmbienteXitems axi = new BLLAmbienteXitems();
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        //servicios ambiente
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertAmbiente(Ambiente b)
        {
            return cl.InsertAmbiente(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateAmbiente(int i,string ambiente)
        {
            return cl.UpdateAmbiente(i,ambiente);
        }
        //servicios item
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertItem(Item b)
        {
            return it.InsertItem(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int Updateitem(int i, string item)
        {
            return it.UpdateItem(i, item);
        }
        // servicios ambientesxitem
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertItemxambiente(ItemXambiente b)
        {
            return axi.InsertItemXAmbiente(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int Updateitemxambiente(ItemXambiente b)
        {
            return axi.UpdatePosicionItemXambiente(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int Deleteitemxambiente(int b)
        {
            return axi.DeleteItemXambiente(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<ItemXambiente> Listitemxambiente(int id)
        {
            return axi.ListItemXambiente(id);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Ambiente> listambiente()
        {
            return cl.Listambiente();
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Item> Listitem()
        {
            return it.Listitem();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Ambiente> ListaAmbientes()
        {
            return cl.ListaAmbientes();
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Item> ListaItems()
        {
            return cl.ListaItems();
        }

    }
}
