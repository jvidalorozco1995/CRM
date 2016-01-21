using DAL;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
    public class BLLFox
    {
        ConecFox dbf = new ConecFox();

        /// <summary>
        /// /Retorna listado de Proyecto almacendos en multi-Fox
        /// </summary>
        /// <returns></returns>
        public List<ProyecFox> ProyecFox()
        {
            return dbf.ConsulProyec();
        }

       /// <summary>
        ///  /Metodo retorna un listado de bloques pertenecientes a un proyecto
       /// </summary>
       /// <param name="p"></param>
       /// <returns></returns>
        public List<BloquesFox> BloquesFox(string p)
        {
            return dbf.ConsulBoques(p);
        }

        /// <summary>
        /// Metodo retorna Listado de inmuebles pertenecientes a un bloque
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<InmueblesFox> InmueblesFox(string b)
        {
            return dbf.ConsulInmuebles(b);
        }

        /// <summary>
        /// Metodo retorna Listado de inmuebles pertenecientes a un bloque
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Inmuebles2Fox> InmueblesFox2()
        {
            return dbf.ConsulInmuebles2();
        }


    }
}
