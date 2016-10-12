using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;
using BLLCRM;

namespace BLLCRM
{
  public class BBLItemAval
    {
        CRMEntiti bd = new CRMEntiti();
      
        public int UpdateItemAval(int id)
        {

            try
            {

                // modifica la linea donde se aprobo el aval
                var ctx = bd.ItemAval.First(inm => inm.IdAval == id);
                ctx.FechaRecibido = DateTime.Now;
                ctx.UsuarioAprueba = Membership.GetUser().ToString();
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
    }
}
