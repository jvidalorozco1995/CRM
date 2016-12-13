CREATE VIEW dbo.Vistablackboard
AS
SELECT        dbo.INMUEBLES_ENTREGAS.ID_INMUEBLES_ENTREGAS, dbo.INMUEBLES_ENTREGAS.ID_ENTREGA, inm.MZA, inm.INMUEBLE, dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE, 
                         dbo.INMUEBLES_ENTREGAS.FECHAREG, dbo.INMUEBLES_ENTREGAS.CONFIRMAOBRA, dbo.INMUEBLES_ENTREGAS.FECHACONFIRMA, dbo.INMUEBLES_ENTREGAS.ESTADOAVAL, 
                         dbo.INMUEBLES_ENTREGAS.INSPECCIONCAL, dbo.INMUEBLES_ENTREGAS.RADICADOVENTA, dbo.INMUEBLES_ENTREGAS.ENTREGAOBRA, dbo.INMUEBLES_ENTREGAS.FECHACLIENTE, 
                         dbo.INMUEBLES_ENTREGAS.ESTADOENTREGA, dbo.INMUEBLES_ENTREGAS.FECHAENTREGA, dbo.INMUEBLES_ENTREGAS.OBSERVACIONES, dbo.inmuebles.SUC, dbo.Entregas.ENVIADO, 
                         dbo.Entregas.ENVIADOA, dbo.Entregas.ENVIADOPOR, dbo.Aval.id, dbo.Entregas.CONSECUTIVO, dbo.Entregas.DIROBRA, dbo.negocio.PROPIETARIO, dbo.negocio.CEDULA_P, 
                         dbo.bloques.BLOQUE_OBRA AS 'Direccion', dbo.bloques.NOMBRE_BLO
FROM            dbo.INMUEBLES_ENTREGAS INNER JOIN
                         dbo.inmuebles ON dbo.inmuebles.REFERENCIA = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE INNER JOIN
                         dbo.Entregas ON dbo.Entregas.ID_ENTREGAS = dbo.INMUEBLES_ENTREGAS.ID_ENTREGA INNER JOIN
                         dbo.inmuebles AS inm ON inm.REFERENCIA = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE INNER JOIN
                         dbo.bloques ON SUBSTRING(inm.REFERENCIA, 0, 7) = dbo.bloques.ID_BLOQUE INNER JOIN
                         dbo.Vclienteseparacion ON dbo.Vclienteseparacion.INMUEBLE = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE INNER JOIN
                         dbo.negocio ON dbo.negocio.CEDULA_P = dbo.Vclienteseparacion.CLIENTE INNER JOIN
                         dbo.proyectos ON dbo.bloques.BLOQUE_OBRA = dbo.proyectos.ID_PROYEC LEFT OUTER JOIN
                         dbo.Aval ON dbo.Aval.ReferenciaInmueble = dbo.INMUEBLES_ENTREGAS.REFERENCIA_INMUEBLE
GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vistablackboard';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'= 280
            TopColumn = 0
         End
         Begin Table = "Vclienteseparacion"
            Begin Extent = 
               Top = 138
               Left = 817
               Bottom = 268
               Right = 1014
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 138
               Left = 1052
               Bottom = 268
               Right = 1285
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
      Begin ColumnWidths = 22
         Width = 284
         Width = 1230
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
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 9975
         Alias = 900
         Table = 1170
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vistablackboard';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[35] 4[24] 2[16] 3) )"
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
         Begin Table = "INMUEBLES_ENTREGAS"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 277
               Right = 322
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "inmuebles"
            Begin Extent = 
               Top = 6
               Left = 360
               Bottom = 136
               Right = 531
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Entregas"
            Begin Extent = 
               Top = 6
               Left = 569
               Bottom = 136
               Right = 739
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "inm"
            Begin Extent = 
               Top = 6
               Left = 777
               Bottom = 136
               Right = 948
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 6
               Left = 986
               Bottom = 136
               Right = 1156
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 138
               Left = 360
               Bottom = 234
               Right = 547
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Aval"
            Begin Extent = 
               Top = 138
               Left = 585
               Bottom = 268
               Right = 779
            End
            DisplayFlags ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Vistablackboard';

