using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace BLLCRM
{
    public class BLLPlanos
    {
        CRMEntiti bd = new CRMEntiti();  
        private string mensaje;

        public string AddPlano (string p){
            var request = HttpContext.Current.Request;
            if (request.Files.Count > 0)
            {
                foreach (string file in request.Files)
                {
                    var postedFile = request.Files[file];
                    int FileLen;
                    FileLen = postedFile.ContentLength;
                    byte[] byteFile = new byte[FileLen];
                    // Read the file into the byte array.
                    postedFile.InputStream.Read(byteFile, 0, FileLen);

                    EntiPlanos planos = new EntiPlanos();
                    planos.FOTO = byteFile;

                }
                return mensaje = "Se a cargado el plano de manera exitosa";
            }
            else
            {
              return mensaje="no fue posble cargar el plano para el proyecto";
            }
        }
    }
}
