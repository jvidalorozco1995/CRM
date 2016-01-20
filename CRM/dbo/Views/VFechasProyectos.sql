CREATE VIEW [dbo].[VFechasProyectos]
AS
SELECT        COUNT(*) AS CONTADOR, dbo.proyectos.ID_PROYEC, DATEPART(mm, dbo.clientes.FECHACREACION) AS MES, DATEPART(YYYY, dbo.clientes.FECHACREACION) AS YEAR, 
                         dbo.proyectos.NOMBRE_PROYEC
FROM            dbo.clientes INNER JOIN
                         dbo.proyectos ON dbo.clientes.PROYEC_INTERES = dbo.proyectos.ID_PROYEC
GROUP BY dbo.proyectos.ID_PROYEC, dbo.proyectos.NOMBRE_PROYEC, DATEPART(mm, dbo.clientes.FECHACREACION), DATEPART(YYYY, dbo.clientes.FECHACREACION)


