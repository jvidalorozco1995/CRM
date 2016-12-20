using System;
using System.Data;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.ComponentModel;
using System.Drawing;
using System.IO;
using System.Web.Script.Services;
using System.Collections.Generic;
using CRMCLIENTES;
using DAL;

namespace CRMCLIENTES
{
    /// <summary>
    /// Summary description for WCaptcha
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.
    [System.Web.Script.Services.ScriptService]
    public class WCaptcha : System.Web.Services.WebService
    {
        BLLGeneral cl = new BLLGeneral();
        [WebMethod(Description = "Main Entry point.  This Returns an encoded [Base64] Captcha Image")]
        public string GetCaptchaImage()
        {
            Random obj = new Random();
            string posibles = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            int longitud = posibles.Length;
            char letra;
            int longitudnuevacadena = 5;
            string nuevacadena = "";
            for (int i = 0; i < longitudnuevacadena; i++)
             {
                   letra = posibles[obj.Next(longitud)];
                   nuevacadena += letra.ToString();
             }
            ReadBytes(Server.MapPath(GenerateCaptchaImage(nuevacadena)));
            return nuevacadena;
        }

        private byte[] ReadBytes(string fileName)
        {
            byte[] b = new byte[0];

            if (File.Exists(fileName))
            {
                try
                {
                    FileStream s = File.OpenRead(fileName);
                    byte[] bytes = new byte[s.Length];
                    s.Read(bytes, (int)0, (int)s.Length);
                    b = bytes;
                }
                catch (IOException e)
                {
                    throw new IOException(e.Message);
                }
            }

            return b;
        }

        private String GenerateCaptchaImage(string imageText)
        {
            Font imgFont;
            int iIterate;
            Bitmap raster;

            Graphics graphicsObject;
            System.Drawing.Image imageObject = System.Drawing.Image.FromFile(Server.MapPath(@"Images\imageBack.jpg"));

            // Create the Raster Image Object
            raster = new Bitmap(imageObject);

            //Create the Graphics Object
            graphicsObject = Graphics.FromImage(raster);

            //Instantiate object of brush with black color
            SolidBrush imgBrush = new SolidBrush(Color.Black);

            //Add the characters to the image
            for (iIterate = 0; iIterate <= imageText.Length - 1; iIterate++)
            {
                imgFont = new Font("Arial", 24, FontStyle.Bold);
                String str = imageText.Substring(iIterate, 1);
                graphicsObject.DrawString(str, imgFont, imgBrush, iIterate * 20, 35);
                graphicsObject.Flush();
            }

            // Generate a uniqiue file name to save image as
            String fileName = "Josue.jpg";
            raster.Save(Server.MapPath(@"Images\"+fileName), System.Drawing.Imaging.ImageFormat.Gif);
            raster.Dispose();
            graphicsObject = null;

            return fileName;

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VPostventa> LisPostventa(string cedula, string codigo)
        {
            return cl.ListPostventa(cedula,codigo);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Postventa> LisPostventas(string cedula, string codigo)
        {
            return cl.ListPostventas(cedula, codigo);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertPostventa(Postventa p)
        {
            return cl.InsertPostventa(p);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<NegocioView> ListNegocios(string cedula)
        {
            return cl.ListNegocios(cedula);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Postventa> ListDetalle(int id)
        {
            return cl.ListDetalle(id);
        }
    }
}
