using DAL;

using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLLCRM
{
  public  class BLLActividadTramites
    {
      
            CRMEntiti bd = new CRMEntiti();
        string mensaje = null;
        /// <summary>
        /// Meotod para registrar los bancos en base de datos
        /// crm
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        public int InsertActividadTramite(ActividadxTramite b)
            {
                try
                {
                    bd.ActividadxTramite.Add(b);
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


        public string UpdateActividadTramite(List<ActividadxTramite> i)
        {

            try
            {
                foreach (var item in i)
                {

                    var ctx = bd.ActividadxTramite.First(inm => inm.Id == item.Id);

                    ctx.Id_Actividad = item.Id_Actividad;
                    ctx.Id_tramite = item.Id_tramite;
                    ctx.Posicion = item.Posicion;
                    bd.SaveChanges();
                }
                return mensaje = "Se actualizaron de manera exitosa";
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
        public List<ActividadxTramite> ListActividadTramite(int id)
            {

                try
                {
                    List<ActividadxTramite> lisb = bd.ActividadxTramite.Where(t => t.Id == id).ToList();
                    //bd.compromisosxcuota.ToList();
                    List<ActividadxTramite> lisbcrm = new List<ActividadxTramite>();
                    if (lisb.Count.Equals(0))
                    {
                        return lisbcrm;
                    }
                    else
                    {
                        foreach (var item in lisb)
                        {
                        ActividadxTramite entb = new ActividadxTramite();
                            entb.Id = item.Id;
                            entb.Id_Actividad = item.Id_Actividad;
                            entb.Id_tramite = item.Id_tramite;
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
        public List<ActividadxTramite> ListActividadTramite()
        {

            try
            {
                List<ActividadxTramite> lisb = bd.ActividadxTramite.ToList();
                //bd.compromisosxcuota.ToList();
                List<ActividadxTramite> lisbcrm = new List<ActividadxTramite>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        ActividadxTramite entb = new ActividadxTramite();
                        entb.Id = item.Id;
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Id_tramite = item.Id_tramite;
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
        public List<VActxtramite> ListActividadxTramite(int tramite)
        {

            try
            {
                List<VActxtramite> lisb = bd.VActxtramite.Where(t=>t.Id_tramite == tramite).ToList();
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
                        entb.Id_Actividad = item.Id_Actividad;
                        entb.Id_tramite = item.Id_tramite;
                        entb.Nombre = item.Nombre;
                        entb.Descripcion = item.Descripcion;
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
