CREATE VIEW dbo.NegocioView
AS
SELECT        dbo.negocio.ID_NEGOCIO, dbo.clientes.NOMBRES + ' ' + dbo.clientes.P_APELLIDO + ' ' + dbo.clientes.S_APELLIDO AS PROPIETARIO, dbo.negocio.CEDULA_P, dbo.negocio.ESTADO_C, dbo.negocio.EXPEDICION, 
                         dbo.negocio.FECHA_NACI, dbo.negocio.LUGAR, dbo.negocio.DIRECCION_R, dbo.negocio.TELEFONO_P, dbo.negocio.EMPRESA, dbo.negocio.TELFONO_EMP, dbo.negocio.CARGO, dbo.negocio.PROFESION, 
                         dbo.negocio.DIRECCION_EMPR, dbo.negocio.ANTIGUEDAD, dbo.negocio.CORREO, dbo.negocio.NOMBRE_CONY, dbo.negocio.CEDULA_CUY, dbo.negocio.TELE_CONY, dbo.negocio.N_HIJO, 
                         dbo.negocio.INTERES_COM, dbo.negocio.VALOR_CASA, dbo.negocio.INICIAL, dbo.negocio.CREDITO, dbo.negocio.BANCO, dbo.negocio.NO_CREDITO, dbo.negocio.FECHA_ES, dbo.negocio.FECHA_ENT, 
                         dbo.negocio.FECHA_SUBRO, dbo.negocio.ASESOR_INFO, dbo.negocio.MEDIO_ENT, dbo.negocio.ASOCIADO, dbo.negocio.CLASE_INMU, dbo.negocio.SEPARACION, dbo.trabajadores.NOMBRES, 
                         dbo.proyectos.NOMBRE_PROYEC, dbo.negocio.INGRESO, dbo.negocio.CODIGO_F, dbo.inmueble_separacion.INMUEBLE, dbo.bloques.NOMBRE_BLO, dbo.negocio.ID_HOJA, dbo.negocio.USER_CARTERA, 
                         dbo.negocio.FECHA_NEGOCIO, dbo.bancos.NOMBRE_BANCO, dbo.negocio.PARQUEADERO, dbo.negocio.AREAS_COMUNES, dbo.negocio.AREA_PRIVADA, dbo.negocio.AREA_CONSTRUIDA, 
                         dbo.negocio.TIPO_DOCUMENTO_CONY, dbo.negocio.LUGAR_EXPEDICION, dbo.negocio.FECHA_EXPEDICION_CUY, dbo.negocio.ADICIONES_EXCLUSIONES, dbo.negocio.SUBSIDIO, dbo.negocio.GARAJE, 
                         dbo.negocio.VALOR_SERVICIOGAS, dbo.negocio.INTERESES_SUBROGACION, dbo.negocio.AUT_MENSAJE, dbo.negocio.AUT_CORREO, dbo.negocio.OBSERVACIONES, dbo.negocio.DESCUENTO, 
                         dbo.negocio.DOMICILIO, dbo.tipo_personas.TIPO AS TIPO_PERSONA, dbo.tipo_documentos.TIPO AS TIPO_DOCUMENTO, dbo.negocio.LUGAR_EXPE, dbo.clientes.DIRECCION_CORRESPON, 
                         dbo.clientes.CELULAR
FROM            dbo.tipo_documentos INNER JOIN
                         dbo.clientes INNER JOIN
                         dbo.trabajadores INNER JOIN
                         dbo.negocio ON dbo.trabajadores.T_CEDULA = dbo.negocio.USER_CREO INNER JOIN
                         dbo.proyectos ON dbo.negocio.PROYECTO_INT = dbo.proyectos.ID_PROYEC INNER JOIN
                         dbo.inmueble_separacion ON dbo.negocio.SEPARACION = dbo.inmueble_separacion.ID_SEPARACION INNER JOIN
                         dbo.bloques ON dbo.bloques.ID_BLOQUE = SUBSTRING(dbo.inmueble_separacion.INMUEBLE, 0, 7) INNER JOIN
                         dbo.bancos ON dbo.negocio.BANCO = dbo.bancos.ID_BANCO ON dbo.clientes.PROYEC_INTERES = dbo.proyectos.ID_PROYEC AND dbo.clientes.CEDULA = dbo.inmueble_separacion.CLIENTE AND 
                         dbo.clientes.CEDULA = dbo.inmueble_separacion.CLIENTE INNER JOIN
                         dbo.tipo_personas ON dbo.clientes.TIPO_PERSONA = dbo.tipo_personas.ID ON dbo.tipo_documentos.ID = dbo.clientes.TIPO_DOCUMENTO

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
         Begin Table = "tipo_documentos"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 102
               Right = 208
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "clientes"
            Begin Extent = 
               Top = 6
               Left = 246
               Bottom = 136
               Right = 469
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "trabajadores"
            Begin Extent = 
               Top = 6
               Left = 507
               Bottom = 136
               Right = 677
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "negocio"
            Begin Extent = 
               Top = 6
               Left = 715
               Bottom = 136
               Right = 948
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "proyectos"
            Begin Extent = 
               Top = 6
               Left = 986
               Bottom = 102
               Right = 1173
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "inmueble_separacion"
            Begin Extent = 
               Top = 6
               Left = 1211
               Bottom = 136
               Right = 1408
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bloques"
            Begin Extent = 
               Top = 102
               Left = 38
               Bottom = 232
               Right = 208
            End
       ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'NegocioView';










GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'NegocioView';




GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'     DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "bancos"
            Begin Extent = 
               Top = 102
               Left = 986
               Bottom = 198
               Right = 1170
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "tipo_personas"
            Begin Extent = 
               Top = 138
               Left = 246
               Bottom = 234
               Right = 416
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
      Begin ColumnWidths = 25
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'NegocioView';









