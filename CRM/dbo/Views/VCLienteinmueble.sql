CREATE VIEW [dbo].[VCLienteinmueble]
AS
SELECT        dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.DIRECCION, dbo.clientes.EMAIL, DATEDIFF(DD, dbo.inmueble_separacion.FECHASEPARACION, GETDATE()) AS DIAS_T, 
                         DATEDIFF(DD, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL) AS DIAS, dbo.clientes.PROYEC_INTERES, dbo.clientes.ASESOR, dbo.inmuebles.INMUDECS, 
                         dbo.inmuebles.VAL_INMUEBLE, dbo.inmuebles.REFERENCIA, dbo.inmueble_separacion.ESTADO, dbo.inmueble_separacion.CLIENTE, dbo.clientes.CEDULA, dbo.proyectos.NOMBRE_PROYEC, 
                         dbo.clientes.TELEFONO2, dbo.clientes.BARRIO, dbo.inmueble_separacion.INMUEBLE, dbo.inmueble_separacion.FECHASEPARACION, dbo.inmueble_separacion.FECHAFINAL, 
                         dbo.clientes.ESTADO AS ESTADO_C
FROM            dbo.proyectos INNER JOIN
                         dbo.clientes ON dbo.proyectos.ID_PROYEC = dbo.clientes.PROYEC_INTERES LEFT OUTER JOIN
                         dbo.inmuebles INNER JOIN
                         dbo.inmueble_separacion ON dbo.inmuebles.REFERENCIA = dbo.inmueble_separacion.INMUEBLE INNER JOIN
                         dbo.Vclienteseparacion ON dbo.inmueble_separacion.ID_SEPARACION = dbo.Vclienteseparacion.ID_SEPARACION ON dbo.clientes.CEDULA = dbo.Vclienteseparacion.CLIENTE AND 
                         dbo.clientes.CEDULA = dbo.inmueble_separacion.CLIENTE


