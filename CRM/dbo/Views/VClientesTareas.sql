CREATE VIEW [dbo].[VClientesTareas]
AS
SELECT        dbo.clientes.CEDULA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.DIRECCION, dbo.clientes.TELEFONO2, dbo.clientes.PROYEC_INTERES, dbo.clientes.ASESOR, 
                         dbo.VistaTareasPorClientes.CLIENTE, dbo.VistaTareasPorClientes.ID_TAREA,
                             (SELECT        ESTADO
                               FROM            dbo.tareas
                               WHERE        (ID_TAREA = dbo.VistaTareasPorClientes.ID_TAREA)) AS ESTADO, dbo.clientes.EMAIL, dbo.proyectos.NOMBRE_PROYEC, dbo.trabajadores.NOMBRES AS NOMBE_AS, 
                         dbo.clientes.FECHACREACION, dbo.clientes.SALA_VENTA, dbo.sala_ventas.NOMBRE_SALA, dbo.clientes.BARRIO, dbo.clientes.ESTADO_CIVIL, dbo.clientes.EMPRESA, dbo.clientes.SUELDO, 
                         dbo.clientes.PRESU_COMPRA, dbo.clientes.INMU_INTERES, dbo.clientes.INFORMACION, dbo.empresas.NOMBRE_EMP, dbo.empresas.TEL_EMP
FROM            dbo.clientes INNER JOIN
                         dbo.proyectos ON dbo.clientes.PROYEC_INTERES = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.trabajadores ON dbo.clientes.ASESOR = dbo.trabajadores.T_CEDULA INNER JOIN
                         dbo.empresas ON dbo.clientes.EMPRESA = dbo.empresas.ID_EMP LEFT OUTER JOIN
                         dbo.sala_ventas ON dbo.clientes.SALA_VENTA = dbo.sala_ventas.ID_SALA LEFT OUTER JOIN
                         dbo.VistaTareasPorClientes ON dbo.VistaTareasPorClientes.CLIENTE = dbo.clientes.CEDULA



GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VClientesTareas';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'dth = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 540
         Or = 2055
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VClientesTareas';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[54] 4[4] 2[18] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = -1106
      End
      Begin Tables = 
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 6
               Left = 1366
               Bottom = 201
               Right = 1553
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "trabajadores"
            Begin Extent = 
               Top = 6
               Left = 1591
               Bottom = 226
               Right = 1761
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "sala_ventas"
            Begin Extent = 
               Top = 6
               Left = 1799
               Bottom = 102
               Right = 1970
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "VistaTareasPorClientes"
            Begin Extent = 
               Top = 6
               Left = 2008
               Bottom = 102
               Right = 2178
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clientes"
            Begin Extent = 
               Top = 6
               Left = 1144
               Bottom = 309
               Right = 1328
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "empresas"
            Begin Extent = 
               Top = 102
               Left = 1799
               Bottom = 215
               Right = 1969
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 21
         Width = 284
         Wi', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VClientesTareas';

