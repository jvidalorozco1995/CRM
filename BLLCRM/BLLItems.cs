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
        public List<Item> Listitem()
        {

            try
            {
                List<Item> lisb = bd.Item.OrderBy(t => t.Id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Item> lisbcrm = new List<Item>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Item entb = new Item();
                        entb.Id = item.Id;
                        entb.Item1 = item.Item1;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
