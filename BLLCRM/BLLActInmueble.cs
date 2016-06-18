using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
    public class BLLActInmueble
    {

        CRMEntiti db = new CRMEntiti();

        public int InsertActInmuebles(string Proyecto)
        {
            try
            {
                ActInmuebles e = new ActInmuebles();
                e.Proyecto = Proyecto.Substring(0,3);
                var user = Membership.GetUser().ToString();
                e.Usuario = user;
                e.Fecha = DateTime.Now;
                db.ActInmuebles.Add(e);
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        public List<VActInmuebles> UltimaVezAct(string Proyecto) {

            try {

                List<VActInmuebles> UTVA = db.VActInmuebles.Where(t => t.Proyecto.Equals(Proyecto)).ToList();
            
                return UTVA;
            }
            catch (Exception ex) {

                return null;
            }
        
        }

      

    }
}
