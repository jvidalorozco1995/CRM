using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{   
    /// <summary>
    /// 
    /// </summary>
    public class EntiProyecto
    {
        public string ID_PROYEC { get; set; }
        public string NOMBRE_PROYEC { get; set; }
    }

    /// <summary>
    /// 
    /// </summary>
    public class Entityplanos {
        public string PROYECT { get; set; }
        public byte[] IMAGEN { get; set; }
        public string TIPO_IMG { get; set; }
    }
}
