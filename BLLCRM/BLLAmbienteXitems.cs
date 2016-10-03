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
  public  class BLLAmbienteXitems
    {
        CRMEntiti bd = new CRMEntiti();

        public int InsertItemXAmbiente(ItemXambiente p)
        {
            try
            {
                bd.ItemXambiente.Add(p);
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
        public int DeleteItemXambiente(int p)
        {
            try
            {
                var ctx = bd.ItemXambiente.First(inm => inm.Id == p);
                        bd.ItemXambiente.Remove(ctx);
                        bd.SaveChanges();
                return 1;

            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
