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
using BLLCRM;

namespace BLLCRM
{
  public class BBLItemAval
    {
        CRMEntiti bd = new CRMEntiti();
        public string InserItemAval( List<ItemAval> list)
        {
            try
            {
 
                    foreach (var item in list)
                    {

                        ItemAval inmu = new ItemAval();
                        inmu.IdAval = item.IdAval;
                        inmu.Ambiente = item.Ambiente;
                        inmu.Cumple = item.Cumple;
                        inmu.Observaciones = item.Observaciones;
                        inmu.FechaCompromiso = item.FechaCompromiso;
                        bd.ItemAval.Add(inmu);

                    }
                    bd.SaveChanges();
                
                return "Se ha guardado satisfactoriamente el registro";
            }
            catch (DbUpdateException ex)
            {
                if (ex.InnerException.ToString().Contains("No se puede insertar una fila de clave duplicada"))
                {

                    return "Error 404 validation no found";
                }
                else
                {
                    throw ex;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateItemAval(int id)
        {

            try
            {


                var ctx = bd.ItemAval.First(inm => inm.IdAval == id);

                ctx.FechaRecibido = DateTime.Now;
                ctx.UsuarioAprueba = Membership.GetUser().ToString();
                bd.SaveChanges();

                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
    }
}
