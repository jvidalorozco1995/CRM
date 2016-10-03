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
    public class BLLItems
    {
        CRMEntiti bd = new CRMEntiti();

        public int InsertItem(Item p)
        {
            try
            {
                bd.Item.Add(p);
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
        public int UpdateItem(int id, string Item)
        {
            try
            {
                var ctx = bd.Item.First(inm => inm.Id == id);

                ctx.Item1 = Item;
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
