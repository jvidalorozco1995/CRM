CREATE VIEW [dbo].[Vdetallesp]
AS
SELECT        dbo.inmuebles.REFERENCIA, dbo.clientes.NOMBRES, dbo.clientes.P_APELLIDO, dbo.clientes.S_APELLIDO, dbo.clientes.DIRECCION, dbo.clientes.TELEFONO2, dbo.inmueble_separacion.FECHASEPARACION, 
                         dbo.inmueble_separacion.FECHAFINAL, dbo.bloques.NOMBRE_BLO, dbo.inmuebles.INMUDECS, dbo.inmuebles.INMUEBLE
FROM            dbo.inmueble_separacion INNER JOIN
                         dbo.inmuebles ON dbo.inmueble_separacion.INMUEBLE = dbo.inmuebles.REFERENCIA INNER JOIN
                         dbo.clientes ON dbo.inmueble_separacion.CLIENTE = dbo.clientes.CEDULA INNER JOIN
                         dbo.bloques ON dbo.inmuebles.INMUOBRA = dbo.bloques.ID_BLOQUE



GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vdetallesp';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N' 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vdetallesp';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[34] 4[10] 2[26] 3) )"
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
         Left = 0
      End
      Begin Tables = 
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 216
               Right = 235
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmuebles"
            Begin Extent = 
               Top = 6
               Left = 273
               Bottom = 218
               Right = 444
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clientes"
            Begin Extent = 
               Top = 227
               Left = 47
               Bottom = 451
               Right = 229
            End
            DisplayFlags = 280
            TopColumn = 4
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 0
               Left = 470
               Bottom = 256
               Right = 640
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
      Begin ColumnWidths = 12
         Width = 284
         Width = 1500
         Width = 3255
         Width = 1140
         Width = 1005
         Width = 1500
         Width = 1500
         Width = 990
         Width = 1245
         Width = 930
         Width = 900
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
         Filter =', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vdetallesp';

