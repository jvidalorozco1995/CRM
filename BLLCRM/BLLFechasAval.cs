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

namespace BLLCRM
{
  public class BLLFechasAval
    {
        CRMEntiti bd = new CRMEntiti();
      public int InsertFechasAval(FechasAval p)
        {
            try
            {
                
                bd.FechasAval.Add(p);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }

        
    }
}
