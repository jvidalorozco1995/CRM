using BLLCRM;
using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FormsAuthAd.Configuracion
{
    public partial class ProyesPlanos : System.Web.UI.Page
    {
        BLLProyectos ad = new BLLProyectos();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        //protected void Button1_Click(object sender, EventArgs e)
        //{
        //    string script = @"<script type='text/javascript'>alert(' CRM - Mayales No se a podido cargar la imagen..'); </script>";

        //    string script2 = @"<script type='text/javascript'>alert(' CRM - Mayales Se ha asigando de manera exitosa la imegen al proyecto actual'); </script>";
        //    planos_Proyectos planos = new planos_Proyectos();
           
        //    planos.PROYECT = "CHI";
        //    planos.IMAGEN = FileUpload1.FileBytes;
        //    planos.TIPO_IMG = FileUpload1.PostedFile.ContentType;
        //    var result = ad.InsertImsPlano(planos);

        //    if (result.Equals(0))
        //    {

        //        ScriptManager.RegisterStartupScript(this, typeof(Page), "alert", script, false);
        //    }
        //    else
        //    {
        //        ScriptManager.RegisterStartupScript(this, typeof(Page), "alert", script2, false);
        //    }     

        //}

    }
}