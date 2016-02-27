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



GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VCLienteinmueble';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N' Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 2430
         Width = 1500
         Width = 3000
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 3300
         Alias = 900
         Table = 4770
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VCLienteinmueble';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[12] 4[43] 2[25] 3) )"
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
         Top = -960
         Left = 0
      End
      Begin Tables = 
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 204
               Left = 616
               Bottom = 300
               Right = 803
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clientes"
            Begin Extent = 
               Top = 0
               Left = 394
               Bottom = 421
               Right = 578
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "inmuebles"
            Begin Extent = 
               Top = 160
               Left = 82
               Bottom = 388
               Right = 244
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 0
               Left = 699
               Bottom = 202
               Right = 896
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Vclienteseparacion"
            Begin Extent = 
               Top = 0
               Left = 78
               Bottom = 152
               Right = 254
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
      Begin ColumnWidths = 24
         Width = 284
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
        ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VCLienteinmueble';

