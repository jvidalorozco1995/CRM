CREATE VIEW [dbo].[VistaTareasPorClientes]
AS
SELECT        CLIENTE, MAX(ID_TAREA) AS ID_TAREA
FROM            dbo.tareas
WHERE        (CLIENTE IN
                             (SELECT        CEDULA
                               FROM            dbo.clientes))
GROUP BY CLIENTE


