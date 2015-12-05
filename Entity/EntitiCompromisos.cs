using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
   public class EntitiNegociosCompro
    {
        public int ID { get; set; }
        public string NOMBRECLIENTE { get; set; }
        public string CEDULA_P { get; set; }
        public string NOMBREBLOQUE { get; set; }
        public string REFERENCIA1 { get; set; }
        public decimal? VLRCREDITO { get; set; }
        public decimal? VLRNEGOCIO { get; set; }
        public decimal? VLRINICIALCUOTA { get; set; }
        public decimal? VLRCUOTA { get; set; }
        public decimal? SALDOXCOBRAR { get; set; }
        public string FECHACARTERA { get; set; }
        public string CODCRM { get; set; }
        public string TELEFONO_P { get; set; }
        public string TELFONO_EMP { get; set; }
        public int? CODIGOTAREA { get; set; }
        public string ESTADO { get; set; }

    }
}
