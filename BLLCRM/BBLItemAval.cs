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
        public int UpdateItemAval(int id,string referenciainmueble)
        {
            // Query the database for the row to be updated.
            var query =
                from ord in bd.ItemAval
                where ord.IdAval == id
                select ord;

            // Execute the query, and change the column values
            // you want to change.
            foreach (ItemAval ord in query)
            {
                ord.FechaRecibido = DateTime.Now;
                ord.UsuarioAprueba = Membership.GetUser().ToString();
                // Insert any additional changes to column values.
            }
            var ctx2 = bd.INMUEBLES_ENTREGAS.First(inm => inm.REFERENCIA_INMUEBLE == referenciainmueble);
            ctx2.ESTADOAVAL = 1;
            bd.SaveChanges();

            // Submit the changes to the database.
            try
            {
                bd.SaveChanges();
                return 1;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return 0;
                //


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
                        entb.Usuario = Membership.GetUser().ToString();
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
