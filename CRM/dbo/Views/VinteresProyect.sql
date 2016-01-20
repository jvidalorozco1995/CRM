CREATE VIEW [dbo].[VinteresProyect]
AS
SELECT        COUNT(dbo.clientes.PROYEC_INTERES) AS CONTADOR, dbo.proyectos.NOMBRE_PROYEC, dbo.clientes.PROYEC_INTERES, dbo.proyectos.ID_PROYEC
FROM            dbo.clientes RIGHT OUTER JOIN
                         dbo.proyectos ON dbo.clientes.PROYEC_INTERES = dbo.proyectos.ID_PROYEC
GROUP BY dbo.proyectos.NOMBRE_PROYEC, dbo.clientes.PROYEC_INTERES, dbo.proyectos.ID_PROYEC


