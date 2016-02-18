using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
   public class BLLBancos
    {
        CRMEntiti bd = new CRMEntiti();

        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserBancos(bancos b)
        {
            try
            {
                bd.bancos.Add(b);
                bd.SaveChanges();
                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                throw;
            }
        }




        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<bancos> ListBancos()
        {

            try
            {
                List<bancos> lisb = bd.bancos.ToList();
                List<bancos> lisbcrm = new List<bancos>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        bancos entb = new bancos();
                        entb.ID_BANCO = item.ID_BANCO;
                        entb.NOMBRE_BANCO = item.NOMBRE_BANCO;
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
