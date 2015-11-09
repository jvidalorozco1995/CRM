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
            foreach (var NegoCRM in NegociosCRM)
            {

                var AcuerdosFOX = ListaAcuerdoFox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM);
                var AcuerdosCRM = bd.acuerdo_fox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM);

                if (AcuerdosFOX.Count() > 0 || AcuerdosCRM.Count() > 0)
                {

                    if (AcuerdosFOX.Count() == AcuerdosCRM.Count()) {
                       
                        ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                    
                    }
                    else if (AcuerdosFOX.Count() > AcuerdosCRM.Count())
                    {
                        foreach (var ac_fox in AcuerdosFOX)
                        {
                            var ac_crm = AcuerdosCRM.Where(t => t.CODIGO == ac_fox.CODIGO);

                            if (ac_crm.Count() > 0)
                            {
                                ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                            }
                            else {

                                InsertarAcuerdo(ac_fox);
                           }

                        }
                    }
                    else if (AcuerdosCRM.Count() > AcuerdosFOX.Count()) 
                    {
                        ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                    }
                 }
             }
            return 1;
        }

       public int ActualizarAcuerdo(IEnumerable<AcuerdoFox> ac_fox_lista, IEnumerable<acuerdo_fox> AcuerdosCRM)
        {

            acuerdo_fox ac_entidad = new acuerdo_fox();
            var Cantidad = 0;

            foreach (var ac_crm in AcuerdosCRM)
            {
                var ac_fox = ac_fox_lista.Where(t=>t.CODIGO == ac_crm.CODIGO).First();

                if (ac_fox != null)
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
                else 
                {
                    var lista = bd.acuerdo_fox.Where(p => p.CODIGO == ac_crm.CODIGO);
                    if (lista.Count() > 0)
                    {
                        var item = lista.First();
                        bd.acuerdo_fox.Remove(item);
                        bd.SaveChanges();
                    }
                } 
                
            }

            return 1;
        }

       public int InsertarAcuerdo(AcuerdoFox ac_fox)
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

