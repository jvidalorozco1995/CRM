CREATE VIEW [dbo].[Vdetallesp]
AS
SELECT        dbo.inmuebles.REFERENCIA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.DIRECCION, dbo.clientes.TELEFONO2, dbo.inmueble_separacion.FECHASEPARACION, 
                         dbo.inmueble_separacion.FECHAFINAL, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUDECS, dbo.inmuebles.INMUEBLE
FROM            dbo.inmueble_separacion INNER JOIN
                         dbo.inmuebles ON dbo.inmueble_separacion.INMUEBLE = dbo.inmuebles.REFERENCIA INNER JOIN
                         dbo.clientes ON dbo.inmueble_separacion.CLIENTE = dbo.clientes.CEDULA INNER JOIN
                         dbo.bloques ON dbo.inmuebles.INMUOBRA = dbo.bloques.ID_BLOQUE


