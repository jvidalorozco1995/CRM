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
        public int Acuerdo(List<AcuerdoFox> ListaAcuerdoFox)
        {
               
            var NegociosCRM = bd.negocio_fox.ToList();
            var Cantidad = 0;
            foreach(var NegoCRM in NegociosCRM){
              
              var AcuerdosFOX = ListaAcuerdoFox.ToList().Where(t=>t.CODCRM == NegoCRM.CODIGOCRM);
              var AcuerdosCRM = bd.acuerdo_fox.ToList().Where(t=>t.CODCRM == NegoCRM.CODIGOCRM);
                
                acuerdo_fox ac_entidad = new acuerdo_fox();

                if (AcuerdosCRM.Count() > 0) {

                    foreach (var ac_crm in AcuerdosCRM)
                    {

                        foreach (var ac_fox in AcuerdosFOX)
                        {

                            if (ac_crm.CODIGO.Equals(ac_fox.CODIGO))
                            {
                                var EntidadPosicion = bd.acuerdo_fox.Where(T => T.CODIGO == ac_fox.CODIGO).First();
                                if (ac_crm.REFERENCIA1 != ac_fox.REFERENCIA1) { EntidadPosicion.REFERENCIA1 = ac_fox.REFERENCIA1; Cantidad++; }
                                if (ac_crm.INMUEBLE != ac_fox.INMUEBLE) { EntidadPosicion.INMUEBLE = ac_fox.INMUEBLE; Cantidad++; }
                                if (ac_crm.NEGOCIO != ac_fox.NEGOCIO) { EntidadPosicion.NEGOCIO = ac_fox.NEGOCIO; Cantidad++; }
                                if (ac_crm.FECHANEGOCIO != ac_fox.FECHANEGOCIO) { EntidadPosicion.FECHANEGOCIO = ac_fox.FECHANEGOCIO; Cantidad++; }
                                if (ac_crm.CONCEPTO != ac_fox.CONCEPTO) { EntidadPosicion.CONCEPTO = ac_fox.CONCEPTO; Cantidad++; }
                                if (ac_crm.FECHACUOTA != ac_fox.FECHACUOTA) { EntidadPosicion.FECHACUOTA = ac_fox.FECHACUOTA; Cantidad++; }
                                if (ac_crm.ANO != ac_fox.ANO) { EntidadPosicion.ANO = ac_fox.ANO; Cantidad++; }
                                if (ac_crm.MES != ac_fox.MES) { EntidadPosicion.MES = ac_fox.MES; Cantidad++; }
                                if (ac_crm.DIA != ac_fox.DIA) { EntidadPosicion.DIA = ac_fox.DIA; Cantidad++; }
                                if (ac_crm.VLRCUOTA != ac_fox.VLRCUOTA) { EntidadPosicion.VLRCUOTA = ac_fox.VLRCUOTA; Cantidad++; }
                                if (ac_crm.PAGOCUOTA != ac_fox.PAGOCUOTA) { EntidadPosicion.PAGOCUOTA = ac_fox.PAGOCUOTA; Cantidad++; }
                                if (ac_crm.SALDOXCOBRAR != ac_fox.SALDOXCOBRAR) { EntidadPosicion.SALDOXCOBRAR = ac_fox.SALDOXCOBRAR; Cantidad++; }
                                if (ac_crm.FECHACARTERA != ac_fox.FECHACARTERA) { EntidadPosicion.FECHACARTERA = ac_fox.FECHACARTERA; Cantidad++; }

                                if (Cantidad > 0)
                                {
                                    bd.SaveChanges();
                                }
                            }

                        }
                    }
                    }else{

                        foreach (var ac_fox in AcuerdosFOX)
                        {
                            acuerdo_fox ac = new acuerdo_fox();
                            ac.CODIGO = ac_fox.CODIGO;
                            ac.REFERENCIA1 = ac_fox.REFERENCIA1;
                            ac.INMUEBLE = ac_fox.INMUEBLE;
                            ac.NEGOCIO = ac_fox.NEGOCIO;
                            ac.FECHANEGOCIO = ac_fox.FECHANEGOCIO;
                            ac.CONCEPTO = ac_fox.CONCEPTO;
                            ac.FECHACUOTA = ac_fox.FECHACUOTA;
                            ac.ANO = ac_fox.ANO;
                            ac.MES = ac_fox.MES;
                            ac.DIA = ac_fox.DIA;
                            ac.VLRCUOTA = ac_fox.VLRCUOTA;
                            ac.PAGOCUOTA = ac_fox.PAGOCUOTA;
                            ac.SALDOXCOBRAR = ac_fox.SALDOXCOBRAR;
                            ac.FECHACARTERA = ac_fox.FECHACARTERA;
                            ac.CODCRM = ac_fox.CODCRM;
                            bd.acuerdo_fox.Add(ac);
                            bd.SaveChanges();
                        }
                    }


                }

              // var ListaAcuerdo = bd.acuerdo_fox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM.Trim());
               //var ListaAcuerdo = bd.acuerdo_fox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM.Trim());
            //   var CantidadFOX = NegocioFOX.Where(t => t.CODCRM == NegoCRM.CODIGOCRM.Trim());
             
                /*if (CantidadCRM.Count() > 0) { 
                     result = EliminarAcuerdo(NegoCRM.CODIGOCRM);
                   }else{
                        result = 1;
                   }*/
                 
             return 1;
            }

           
        }

        /// <summary>
        /// Metodod para eliminar el acuerdo
        /// </summary>
        /// <param name="CODIGOCRM"></param>
        /// <returns></returns>
      /*  public int EliminarAcuerdo(string CODIGOCRM) {
            try
            {
                bd.acuerdo_fox.Where(p => p.CODCRM == CODIGOCRM).ToList().ForEach(p => bd.acuerdo_fox.Remove(p));
                bd.SaveChanges();
               
            }
            catch (Exception ex) {

                return 0;
            }
            return 1;
            
        }*/

    }

