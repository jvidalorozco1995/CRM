using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FormsAuthAd.handler
{
    /// <summary>
    /// Summary description for SubirArchivoAvalHandler
    /// </summary>
    public class SubirArchivoAvalHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            string CODIGOAVAL = context.Request["CODIGOAVAL"];
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
                        fname = CODIGOAVAL + ".pdf";
                    }
                    else
                    {
                        fname = CODIGOAVAL + ".pdf";
                    }
                    fname = Path.Combine(context.Server.MapPath("~/Aval/"), fname);
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