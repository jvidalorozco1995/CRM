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
  public  class BLLAmbienteXitems
    {
        CRMEntiti bd = new CRMEntiti();

        public int InsertItemXAmbiente(ItemXambiente p)
        {
            try
            {
                bd.ItemXambiente.Add(p);
                bd.SaveChanges();
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
        public int DeleteItemXambiente(int p)
        {
            try
            {
                var ctx = bd.ItemXambiente.First(inm => inm.Id == p);
                        bd.ItemXambiente.Remove(ctx);
                        bd.SaveChanges();
                return 1;

            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int UpdatePosicionItemXambiente(ItemXambiente i)
        {

            try
            {

                int? posicion = 1;
                int? actual = 1;

                var range1 = bd.ItemXambiente
               .Where(t => t.Id == i.Id).FirstOrDefault();
                posicion = i.Consecutivo;
                actual = range1.Consecutivo;
                //if (range1 != null)
                //{
                //    range1.Posicion = i.Posicion;
                //    bd.SaveChanges();
                //}
                if (actual < posicion)
                {
                    var range = bd.ItemXambiente.Where(t => t.IdAmbiente == i.IdAmbiente && t.Consecutivo >= actual && t.Consecutivo <= posicion).ToList();
                    foreach (var item in range)
                    {
                        if (item.Consecutivo == actual)
                        {
                            item.Consecutivo = posicion;
                            bd.SaveChanges();
                        }
                        else if (item.Consecutivo == posicion)
                        {
                            item.Consecutivo = posicion - 1;
                            bd.SaveChanges();
                        }
                        else
                        {
                            item.Consecutivo = item.Consecutivo - 1;
                            bd.SaveChanges();
                        }


                    }
                }
                else
                {
                    var range = bd.ItemXambiente.Where(t => t.IdAmbiente == i.IdAmbiente && t.Consecutivo <= actual && t.Consecutivo >= posicion).ToList();
                    foreach (var item in range)
                    {
                        if (item.Consecutivo == actual)
                        {
                            item.Consecutivo = posicion;
                            bd.SaveChanges();
                        }
                        else if (item.Consecutivo == posicion)
                        {
                            item.Consecutivo = posicion + 1;
                            bd.SaveChanges();
                        }
                        else
                        {
                            item.Consecutivo = item.Consecutivo + 1;
                            bd.SaveChanges();
                        }


                    }
                }


                return 1;
            }
            catch (Exception ex)
            {
                return 0;
                throw;
            }
        }
        public List<VistaAmbiente> ListItemXambiente(int id)
        {

            try
            {
                List<VistaAmbiente> lisb = bd.VistaAmbiente.OrderBy(t => t.Id).Where(t => t.Idambiente == id).ToList();
                //bd.compromisosxcuota.ToList();
                List<VistaAmbiente> lisbcrm = new List<VistaAmbiente>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        VistaAmbiente entb = new VistaAmbiente();
                        entb.Id = item.Id;
                        entb.Idambiente = item.Idambiente;
                        entb.Ambiente = item.Ambiente;
                        entb.Item = item.Item;
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
        public List<ItemXambiente> ListItemXambientenoincluido(int id)
        {

            try
            {
                List<ItemXambiente> lisb = bd.ItemXambiente.OrderBy(t => t.Consecutivo).Where(t => t.IdAmbiente == id).ToList();
                List<Item> lisitem = bd.Item.OrderBy(t => t.Id).ToList();
                List<ItemXambiente> lisbcrm = new List<ItemXambiente>();
                if (lisb.Count.Equals(0))
                {
                    return lisbcrm;
                }
                else
                {
                    foreach (var item in lisb)
                    {
                        foreach (var item2 in lisitem)
                        {
                           if(item.IdItem == item2.Id)
                            {
                                ItemXambiente entb = new ItemXambiente();
                                entb.Id = item.Id;
                                entb.IdAmbiente = item.IdAmbiente;
                                entb.IdItem = item.IdItem;
                                lisbcrm.Add(entb);
                            }
                        }
                        
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
