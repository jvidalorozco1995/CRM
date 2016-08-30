using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity;
namespace BLLCRM
{
   public class BLLTipoPersonas
    {
        CRMEntiti bd = new CRMEntiti();


        /// <summary>
        /// Metodo Retorna una lista de inmuebles
        /// selccionados por  manzana,proyecto ingresado a CRM ordenado de manera ASC
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<EntitiTipoPersonas> LisTipoPersonas()
        {
            try
            {
                List<tipo_personas> lisImn = bd.tipo_personas.ToList();
                List<EntitiTipoPersonas> LsImb = new List<EntitiTipoPersonas>();
                if (lisImn.Count.Equals(0))
                {

                    return LsImb;
                }
                else
                {
                    foreach (var item in lisImn)
                    {
                        EntitiTipoPersonas Tipo = new EntitiTipoPersonas();
                        Tipo.ID = item.ID;
                        Tipo.TIPO = item.TIPO;
                        LsImb.Add(Tipo);
                    }

                    return LsImb;
                }

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
