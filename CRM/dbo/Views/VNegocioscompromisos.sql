CREATE VIEW dbo.VNegocioscompromisos
AS
SELECT        dbo.acuerdo_fox.ID, dbo.acuerdo_fox.VLRCUOTA, dbo.VnegocioFox.NOMBRECLIENTE, dbo.VnegocioFox.CEDULA_P, dbo.VnegocioFox.NOMBREBLOQUE, dbo.VnegocioFox.NEGOCIO AS REFERENCIA1, 
                         dbo.VnegocioFox.VLRCREDITO, dbo.VnegocioFox.VLRNEGOCIO, dbo.VnegocioFox.VLRINICIALCUOTA, dbo.acuerdo_fox.CODCRM, dbo.acuerdo_fox.CODIGOTAREA, dbo.acuerdo_fox.SALDOXCOBRAR, 
                         dbo.acuerdo_fox.FECHACARTERA, dbo.VnegocioFox.TELEFONO_P, dbo.VnegocioFox.TELFONO_EMP
FROM            dbo.acuerdo_fox INNER JOIN
                         dbo.VnegocioFox ON dbo.acuerdo_fox.REFERENCIA1 = dbo.VnegocioFox.NEGOCIO
WHERE        (dbo.acuerdo_fox.ID IN
                             (SELECT        ID
                               FROM            dbo.acuerdo_fox AS acuerdo_fox_2
                               WHERE        (ID IN
                                                             (SELECT        MAX(ID) AS ID
                                                               FROM            dbo.acuerdo_fox AS acuerdo_fox_1
                                                               GROUP BY NEGOCIO)))) AND (dbo.acuerdo_fox.SALDOXCOBRAR > 0)

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
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
         Begin Table = "acuerdo_fox"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 309
               Right = 523
            End
            DisplayFlags = 280
            TopColumn = 3
         End
         Begin Table = "VnegocioFox"
            Begin Extent = 
               Top = 6
               Left = 561
               Bottom = 320
               Right = 751
            End
            DisplayFlags = 280
            TopColumn = 1
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 27
         Width = 284
         Width = 1500
         Width = 1500
         Width = 2565
         Width = 1500
         Width = 2130
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
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VNegocioscompromisos';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'VNegocioscompromisos';

