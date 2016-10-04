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
   public class BLLAmbiente
    {
        CRMEntiti bd = new CRMEntiti();

        public int InsertAmbiente(Ambiente p)
        {
            try
            {
                bd.Ambiente.Add(p);
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
        public int UpdateAmbiente(int id, string Ambiente)
        {

            try
            {


                var ctx = bd.Ambiente.First(inm => inm.Id == id);

                ctx.Ambiente1 = Ambiente;
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<Ambiente> Listambiente()
        {

            try
            {
                List<Ambiente> lisb = bd.Ambiente.OrderBy(t => t.Id).ToList();
                //bd.compromisosxcuota.ToList();
                List<Ambiente> lisbcrm = new List<Ambiente>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        Ambiente entb = new Ambiente();
                        entb.Id = item.Id;
                        entb.Ambiente1 = item.Ambiente1;
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
