using DAL;
using Entity;
using Entity.VProyectos;
using Entity.VTareas;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Security;

namespace BLLCRM
{
 public class BLLAval
    {
        CRMEntiti bd = new CRMEntiti();
        public int InsertIAval(Aval p)
        {
            try
            {
                var cons = 0;
                var consecu = bd.Aval.OrderByDescending(u => u.Registro).FirstOrDefault();
                if (consecu == null) { cons = 0; } else { cons = Convert.ToInt32(consecu.Registro); }
                // b.ENVIADO = DateTime.Now;
                p.Registro = (cons + 1);
                if (p.Aprueba == 1)
                {
                    p.UsuarioAprueba = Membership.GetUser().ToString();
                }
                bd.Aval.Add(p);
                bd.SaveChanges();
                //   UpdatePosicionItemXambiente(a);

                return 1;
            }
            catch (DbUpdateException)
            {
                return 0;
            }
            catch (Exception)
            {
                return 2;
                throw;
            }
        }
        public List<VistaAVal> ListIAval(string id)
        {
            

            try
            {
                List<VistaAVal> lisb = bd.VistaAVal.Where(t=> t.ReferenciaInmueble == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAVal> lisbcrm = new List<VistaAVal>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAVal entb = new VistaAVal();
                        entb.id = item.id;
                        entb.Propietario = item.Propietario;
                        entb.Residente = item.Residente;
                        entb.Inspeccion = item.Inspeccion;
                        entb.Aprueba = item.Aprueba;
                        entb.UsuarioAprueba = item.UsuarioAprueba;
                        entb.FechaFinApro = item.FechaFinApro;
                        entb.NOMBRE_PROYEC = item.NOMBRE_PROYEC;
                        entb.NOMBRE_BLO = item.NOMBRE_BLO;
                        entb.ReferenciaInmueble = item.ReferenciaInmueble;
                        entb.INMUEBLE = item.INMUEBLE;
                        lisbcrm.Add(entb);
                    }
                    return lisbcrm;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
