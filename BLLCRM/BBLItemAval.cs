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
        public int UpdateItemAval(int id)
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
}
