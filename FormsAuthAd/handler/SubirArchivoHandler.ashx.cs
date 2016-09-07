using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FormsAuthAd.handler
{
    /// <summary>
    /// Summary description for SubirArchivoHandler
    /// </summary>
  


    public class SubirArchivoHandler : IHttpHandler
    {



        public void ProcessRequest(HttpContext context)
        {

            string CODIGOCRM = context.Request["CODIGOCRM"];
            if (context.Request.Files.Count > 0)
            {
              
                HttpFileCollection files = context.Request.Files;
                for (int i = 0; i < files.Count; i++)
                {
                    HttpPostedFile file = files[i];
                    string fname;
                    if (HttpContext.Current.Request.Browser.Browser.ToUpper() == "IE" || HttpContext.Current.Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                    {
                        string[] testfiles = file.FileName.Split(new char[] { '\\' });
                        fname = CODIGOCRM+".pdf";
                    }
                    else
                    {
                        fname = CODIGOCRM+".pdf";
                    }
                    fname = Path.Combine(context.Server.MapPath("~/Upload/"), fname);
                    file.SaveAs(fname);
                }
            }
            context.Response.ContentType = "text/plain";
            context.Response.Write("Adjunto guardado satisfactoriamente");
         
        }
        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}