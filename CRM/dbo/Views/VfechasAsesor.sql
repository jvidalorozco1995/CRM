CREATE VIEW [dbo].[VfechasAsesor]
AS
SELECT        dbo.VAsesoresT.NOMBRES, DATEPART(mm, dbo.clientes.FECHACREACION) AS MES, DATEPART(YYYY, dbo.clientes.FECHACREACION) AS YEAR, dbo.VAsesoresT.CONTADOR, dbo.VAsesoresT.T_CEDULA
FROM            dbo.VAsesoresT RIGHT OUTER JOIN
                         dbo.clientes ON dbo.VAsesoresT.T_CEDULA = dbo.clientes.ASESOR
GROUP BY DATEPART(mm, dbo.clientes.FECHACREACION), dbo.VAsesoresT.NOMBRES, dbo.VAsesoresT.CONTADOR, DATEPART(YYYY, dbo.clientes.FECHACREACION), dbo.VAsesoresT.T_CEDULA


