CREATE VIEW [dbo].[VTracliente]
AS
SELECT        dbo.clientes.CEDULA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.EMAIL, dbo.clientes.DIRECCION, dbo.clientes.TELEFONO2, dbo.tareas.ESTADO, 
                         dbo.tareas.FECHAINICIO, dbo.tareas.FECHAFIN, dbo.tareas.CONCEPTO, dbo.tareas.ID_TAREA, dbo.clientes.ASESOR, dbo.clientes.PROYEC_INTERES
FROM            dbo.clientes LEFT OUTER JOIN
                         dbo.tareas ON dbo.clientes.CEDULA = dbo.tareas.CLIENTE


