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
  public class BLLFechasAval
    {
        CRMEntiti bd = new CRMEntiti();
     
        public List<FechasAval> ListFechaAval( int registro)
        {


            try
            {
                List<FechasAval> lisb = bd.FechasAval.Where(t => t.idRegistro == registro).ToList();
                //bd.compromisosxcuota.ToList();
                List<FechasAval> lisbcrm = new List<FechasAval>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        FechasAval entb = new FechasAval();
                        entb.Id = item.Id;
                        entb.idRegistro = item.idRegistro;
                        entb.FechaInspeccion = item.FechaInspeccion;
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
