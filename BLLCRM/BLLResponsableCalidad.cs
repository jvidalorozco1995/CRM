using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;


namespace BLLCRM
{
  public class BLLResponsableCalidad
    {
        CRMEntiti bd = new CRMEntiti();
        public int InserResponsableCalidad(ResponsableCalidad b)
        {
            try
            {
                
                bd.ResponsableCalidad.Add(b);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateResponsableCalidad(ResponsableCalidad i)
        {
            try
            {
                var ctx = bd.ResponsableCalidad.First(inm => inm.Proyecto == i.Proyecto);


                ctx.Proyecto = i.Proyecto;
                ctx.Usuario = i.Usuario;
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
