using DAL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
  public  class BLLActividades
    {
             CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InserActividades(Actividades b)
            {
                try
                {
                    bd.Actividades.Add(b);
                    bd.SaveChanges();
                    return 1;
                }
                catch (DbUpdateException)
                {
                    return 0;
                }
                catch (Exception)
                {
                    throw;
                }
            }

        public string UpdateActividades(List<Actividades> i)
        {

            try
            {
                foreach (var item in i)
                {
                
                var ctx = bd.Actividades.First(inm => inm.id == item.id);
                        
                    ctx.Nombre = item.Nombre;
                    ctx.Usuario = item.Usuario;
                    ctx.Descripcion = item.Descripcion;
                    ctx.Simultaneo = item.Simultaneo;
                    ctx.Actividad_Dependiente = item.Actividad_Dependiente;
                    bd.SaveChanges();
                }
                return mensaje = "Las actividades se actualizaron de manera exitosa";
            }
           
            catch (Exception ex)
            {
                return mensaje = "No fue posible llevar  a cabo el proceso" + ex;
                throw;
            }
        }

        /// <summary>
        /// rertorna listado de bancos pertenecientes al proyecto
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public List<Actividades> ListActividades(int id)
            {

                try
                {
                    List<Actividades> lisb = bd.Actividades.Where(t => t.id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<Actividades> lisbcrm = new List<Actividades>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                            Actividades entb = new Actividades();
                            entb.id = item.id;
                            entb.Nombre = item.Nombre;
                            entb.Usuario = item.Usuario;
                            entb.Descripcion = item.Descripcion;
                            entb.Simultaneo = item.Simultaneo;
                            entb.Actividad_Dependiente = item.Actividad_Dependiente;
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
        public List<VActxtramite> ListActividades()
        {

            try
            {
                List<VActxtramite> lisb = bd.VActxtramite.ToList();
                //bd.compromisosxcuota.ToList();
                List<VActxtramite> lisbcrm = new List<VActxtramite>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VActxtramite entb = new VActxtramite();
                        entb.id = item.id;
                        entb.Nombre = item.Nombre;
                        entb.Usuario = item.Usuario;
                        entb.Descripcion = item.Descripcion;
                        entb.Simultaneo = item.Simultaneo;
                        entb.Actividad_Dependiente = item.Actividad_Dependiente;
                        entb.Id_tramite = item.Id_tramite;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Posicion = item.Posicion;
                         
  
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
