using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLTipoDocumentos
    {
        CRMEntiti bd = new CRMEntiti();


        /// <summary>
        /// Metodo Retorna una lista de inmuebles
        /// selccionados por  manzana,proyecto ingresado a CRM ordenado de manera ASC
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<EntitiTipoDocumentos> LisTipoDocumentos()
        {
            try
            {
                List<tipo_documentos> lisImn = bd.tipo_documentos.ToList();
                List<EntitiTipoDocumentos> LsImb = new List<EntitiTipoDocumentos>();
                if (lisImn.Count.Equals(0))
                {

                    return LsImb;
                }
                else
                {
                    foreach (var item in lisImn)
                    {
                        EntitiTipoDocumentos Tipo = new EntitiTipoDocumentos();
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
