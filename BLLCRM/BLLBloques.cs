using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLBloques
    {
        CRMEntiti bd = new CRMEntiti();

        /// <summary>
        /// Meotod para registrar los bloques en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserBloques(bloques b)
        {
            try
            {
                bd.bloques.Add(b);
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
        /// Retorna Listado de Bloques Ingresado en CRM
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<EntiBloques> ListBloques(string b)
        {

            try
            {
              List<bloques> lisbl = bd.bloques.OrderBy(o => o.NOMBRE_BLO).Where(t => t.BLOQUE_OBRA == b).ToList();
              List<EntiBloques> EntiB = new List<EntiBloques>();
            if (lisbl.Count.Equals(0))
            {
                return EntiB;
            }
            else
            {
                foreach (var item in lisbl)
                {
                    EntiBloques Py = new EntiBloques();
                    Py.ID_BLOQUE = item.ID_BLOQUE;
                    Py.BLOQUE_OBRA = item.BLOQUE_OBRA;
                    Py.BLOQUE_CODI = item.BLOQUE_CODI;
                    Py.NOMBRE_BLO = item.NOMBRE_BLO;
                    EntiB.Add(Py);
                }
                return EntiB;
            }
            }
            catch (Exception)
            {
                  
                throw;
            }

        }

        /// <summary>
        /// rertorna listado de Bloques pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<EntiBloques> ListBloquesPr(string b)
        {

            try
            {
                List<bloques> lisb = bd.bloques.OrderBy(bl => bl.NOMBRE_BLO).Where(l => l.BLOQUE_OBRA == b).ToList();
                List<EntiBloques> lisbcrm = new List<EntiBloques>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        EntiBloques entb = new EntiBloques();
                        entb.ID_BLOQUE = item.ID_BLOQUE;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.BLOQUE_CODI = item.BLOQUE_CODI;
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
