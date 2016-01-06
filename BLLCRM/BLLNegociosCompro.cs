using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLNegociosCompro
    {
        CRMEntiti bd = new CRMEntiti();
        public List<EntitiNegociosCompro> ListCompromisos(string c)
        {
            List<VNegocioscompromisos> list = bd.VNegocioscompromisos.Where(t=>t.REFERENCIA1.Substring(0,3).Equals(c)).ToList();
            List<EntitiNegociosCompro> listcompromiso = new List<EntitiNegociosCompro>();
         
            foreach(var compromi in list) 
            {

                EntitiNegociosCompro Entidadcompromiso = new EntitiNegociosCompro();
                Entidadcompromiso.ID = compromi.ID;
                Entidadcompromiso.NOMBRECLIENTE = compromi.NOMBRECLIENTE;
                Entidadcompromiso.CEDULA_P = compromi.CEDULA_P;
                Entidadcompromiso.NOMBREBLOQUE = compromi.NOMBREBLOQUE;
                Entidadcompromiso.REFERENCIA1 = compromi.REFERENCIA1;
                Entidadcompromiso.VLRCREDITO = compromi.VLRCREDITO;
                Entidadcompromiso.VLRNEGOCIO = compromi.VLRNEGOCIO;
                Entidadcompromiso.VLRINICIALCUOTA = compromi.VLRINICIALCUOTA;
                Entidadcompromiso.VLRCUOTA = compromi.VLRCUOTA;
                Entidadcompromiso.CODIGOTAREA = compromi.CODIGOTAREA;
                Entidadcompromiso.FECHACARTERA = compromi.FECHACARTERA;
                Entidadcompromiso.TELEFONO_P = compromi.TELEFONO_P;
                Entidadcompromiso.TELFONO_EMP = compromi.TELFONO_EMP;
                Entidadcompromiso.CODCRM = compromi.CODCRM;

                if (DateTime.Now > Convert.ToDateTime(compromi.FECHACARTERA))
                {
                  //VENCIDA
                  Entidadcompromiso.ESTADO = "VE";
                }
                else if (Ndias(Convert.ToDateTime(compromi.FECHACARTERA), DateTime.Now) <= 15)
                {
                    //PROXIMA A VENCER
                    Entidadcompromiso.ESTADO = "PV";
                }
                listcompromiso.Add(Entidadcompromiso);
            }

           return listcompromiso;
        }

        /// <summary>
        /// Retorna el Numero de dias entre una fecha y otra
        /// </summary>
        /// <param name="date1"></param>
        /// <param name="date2"></param>
        /// <returns></returns>
        public int Ndias( DateTime date1, DateTime date2){ int dias = date1.Day - date2.Day; return dias;}

    }
}
