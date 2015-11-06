using DAL;
using Entity;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLAcuerdoFox
    {

        CRMEntiti bd = new CRMEntiti();
        /// <summary>
        /// Metodo para alamacenar hoja de negocio en el sistema
        /// </summary>
        /// <param name="n"></param>
        /// <param name="inm"></param>
        /// <param name="ac"></param>
        /// <returns></returns>
        public int Acuerdo(List<AcuerdoFox> NegocioFOX)
        {
            var NegociosCRM =bd.negocio_fox.ToList();
            
            
            foreach(var NegoCRM in NegociosCRM){
              
                var CantidadCRM = bd.acuerdo_fox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM.Trim());
                var CantidadFOX = NegocioFOX.Where(t => t.CODCRM == NegoCRM.CODIGOCRM.Trim());

                   int result=0;

                   if (CantidadCRM.Count() > 0) { 
                       result = EliminarAcuerdo(NegoCRM.CODIGOCRM);
                   }else{
                        result = 1;
                   }

                   if (result > 0) {

                        foreach (var item in CantidadFOX)
                        {
                            acuerdo_fox ac = new acuerdo_fox();
                            ac.REFERENCIA1 = item.REFERENCIA1;
                            ac.INMUEBLE = item.INMUEBLE;
                            ac.NEGOCIO = item.NEGOCIO;
                            ac.FECHANEGOCIO = item.FECHANEGOCIO;
                            ac.CONCEPTO = item.CONCEPTO;
                            ac.FECHACUOTA = item.FECHACUOTA;
                            ac.ANO = item.ANO;
                            ac.MES = item.MES;
                            ac.DIA = item.DIA;
                            ac.VLRCUOTA = item.VLRCUOTA;
                            ac.PAGOCUOTA = item.PAGOCUOTA;
                            ac.SALDOXCOBRAR = item.SALDOXCOBRAR;
                            ac.FECHACARTERA = item.FECHACARTERA;
                            ac.CODCRM = item.CODCRM;
                            bd.acuerdo_fox.Add(ac);
                            bd.SaveChanges();
                        }
                 }

            }

            return 1;
        }

        /// <summary>
        /// Metodod para eliminar el acuerdo
        /// </summary>
        /// <param name="CODIGOCRM"></param>
        /// <returns></returns>
        public int EliminarAcuerdo(string CODIGOCRM) {
            try
            {
                bd.acuerdo_fox.Where(p => p.CODCRM == CODIGOCRM).ToList().ForEach(p => bd.acuerdo_fox.Remove(p));
                bd.SaveChanges();
               
            }
            catch (Exception ex) {

                return 0;
            }
            return 1;
            
        }

    }
}
