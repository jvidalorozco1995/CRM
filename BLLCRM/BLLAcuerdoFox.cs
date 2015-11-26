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
            int Contador = 0;

            var NegociosCRM = bd.negocio_fox.ToList();

            if (NegociosCRM.Count > 0)
            {
                int a = NegociosCRM.Count;
                //Recorrer todos los negocios
                foreach (var NegoCRM in NegociosCRM)
                {
                    //Metodo para llenar la lista de los acuerdos de fox por el negocio
                    var AcuerdosFOX = ListaAcuerdoFox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM);
                    //Metodo para llenar la lista de los acuerdos de fox desde SQL SERVER por el negocio
                    var AcuerdosCRM = bd.acuerdo_fox.ToList().Where(t => t.CODCRM == NegoCRM.CODIGOCRM);

                    var i = AcuerdosFOX.Count();
                    var c = AcuerdosCRM.Count();
                        //Si los acuerdos de fox y los acuerdos de CRM son mayor a CERO (0)
                        if (AcuerdosFOX.Count() > 0 || AcuerdosCRM.Count() > 0)
                        {
                            //Si los acuerdos de fox son igual a los acuerdos en CRM, entonces actualice los acuerdos
                            if (AcuerdosFOX.Count() == AcuerdosCRM.Count())
                            {
                                //Actualiza los acuerdos <<<Se le pasan dos parametros de acuerdosFOX y acuerdosCRM>>>
                                ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                            }
                            //sino si es mayor entonces recorremos todos los acuerdos de fox.   
                            else if (AcuerdosFOX.Count() > AcuerdosCRM.Count())
                            {
                               
                                //Recorrer todos los acuerdos de fox
                                foreach (AcuerdoFox ac_fox in AcuerdosFOX)
                                {
                                    //validar si el acuerdo del crm, existe en fox
                                    var ac_crm = AcuerdosCRM.Where(t => t.CODIGO == ac_fox.CODIGO);
                                   

                                    //si el acuerdo existe lo actualizamos
                                    if (ac_crm.Count() > 0)
                                    {
                                        //Actualizar los acuerdos
                                        ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                                    }
                                    else
                                    {
                                        Contador++;
                                        //sino existe insertamos el acuerdo
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
                                        ac.FECHACARTERA = Convert.ToDateTime(ac_fox.FECHACARTERA).ToShortDateString();
                                        ac.CODCRM = ac_fox.CODCRM;
                                        bd.acuerdo_fox.Add(ac);
                                       
                                    }

                                    
                                 }
                                 
                                
                            }
                            //sino si si los acuerdos de CRM son mayores a los acuerdos de FOX
                            else if (AcuerdosCRM.Count() > AcuerdosFOX.Count())
                            {
                                //sino actualizamos el acuerdo
                                ActualizarAcuerdo(AcuerdosFOX, AcuerdosCRM);
                            }
                        }
                }
                bd.SaveChanges();
                var asasc = Contador;
            }
            return 1;
        }

        /// <summary>
        /// Metodo para actualizar el acuerdo de pago
        /// </summary>
        /// <param name="ac_fox_lista"></param>
        /// <param name="AcuerdosCRM"></param>
        /// <returns></returns>
        public int ActualizarAcuerdo(IEnumerable<AcuerdoFox> ac_fox_lista, IEnumerable<acuerdo_fox> AcuerdosCRM)
        {
            //Para crear una nueva entidad del acuerdo
            acuerdo_fox ac_entidad = new acuerdo_fox();
            //Contador para saber si hubo cambios
            var Cantidad = 0;
            //Recorrer los acuerdos de CRM
            foreach (var ac_crm in AcuerdosCRM)
            {
                //buscamos con el codigo CRM en la lista de fox
                var ac_fox = ac_fox_lista.Where(t => t.CODIGO == ac_crm.CODIGO).First();
                //validamos que la entrada no sea nulla
                if (ac_fox != null)
                {
                    //Cogemos la primera posicion del unico registro encontrado
                    var EntidadPosicion = bd.acuerdo_fox.Where(T => T.CODIGO == ac_fox.CODIGO).First();
                    //si cualquiera de las propiedades es diferente de la que ya existe la actualiza
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
                    if (ac_crm.FECHACARTERA != Convert.ToDateTime(ac_fox.FECHACARTERA).ToShortDateString()) { EntidadPosicion.FECHACARTERA = Convert.ToDateTime(ac_fox.FECHACARTERA).ToShortDateString(); Cantidad++; }
                    //Si contador es mayor a cero guardamos los cambios
                    if (Cantidad > 0)
                    {
                        bd.SaveChanges();
                    }
                }
                //sino eliminamos el acuerdo
                else
                {
                    var lista = bd.acuerdo_fox.Where(p => p.CODIGO == ac_crm.CODIGO);
                    if (lista.Count() > 0)
                    {
                        var item = lista.First();
                        //Removemos el item
                        bd.acuerdo_fox.Remove(item);
                        bd.SaveChanges();
                    }
                }

            }
           return 1;
        }
        //Metodo para listar los acuerdos
        public List<VacuerdosFox> AcuerdosFox(string Negocio) {

            List<VacuerdosFox> Vacuerdo = bd.VacuerdosFox.Where(t=>t.REFERENCIA1 == Negocio).ToList();

            return Vacuerdo;
        }
      
       
    }

    }

