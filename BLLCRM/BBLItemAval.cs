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
        public int UpdateItemAval( string referenciainmueble, List<ItemAval> i)
        {
            try
                //su pinche madre
                
            {
                int aval = 0;
                foreach (var item in i)
                {
                    var ctx = bd.ItemAval.First(inm => inm.Id == item.Id);
                    ItemAval inmu = new ItemAval();
                    ctx.FechaRecibido = DateTime.Now; 
                    ctx.UsuarioAprueba = Membership.GetUser().ToString();
                    if (item.Cumple == 1)
                    {
                                              
                    }
                    else
                    {
                        inmu.FechaCompromiso = item.FechaCompromiso;
                    }
                    ctx.Observaciones = item.Observaciones;
                    ctx.FechaCompromiso = item.FechaCompromiso;
                    aval = item.Id;
                    bd.SaveChanges();
                }
                var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
                ctx2.ESTADOAVAL = 1;
                bd.SaveChanges();
                
                FechasAval p = new FechasAval();
                p.FechaInspeccion = DateTime.Now;
                p.idRegistro = aval;
                bd.FechasAval.Add(p);
                bd.SaveChanges();
                return 1;
            }

            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<ItemAval> ListItemAval(int id)
        {

            try
            {
                List<ItemAval> lisb = bd.ItemAval.Where(t => t.IdAval == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<ItemAval> lisbcrm = new List<ItemAval>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        ItemAval entb = new ItemAval();
                        entb.IdAval = item.IdAval;
                        entb.Id = item.Id;
                        entb.Ambiente = item.Ambiente;
                        entb.Numero = item.Numero;
                        entb.Item = item.Item;
                        entb.Cumple = item.Cumple;
                        entb.Observaciones = item.Observaciones;
                        entb.FechaCompromiso = item.FechaCompromiso;
                        entb.FechaRecibido = item.FechaRecibido;
                        entb.UsuarioAprueba = item.UsuarioAprueba;
                        
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
