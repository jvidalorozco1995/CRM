﻿CREATE TABLE [dbo].[negocio] (
    [ID_NEGOCIO]            VARCHAR (50)    NOT NULL,
    [CLASE_INMU]            NVARCHAR (MAX)  NULL,
    [FECHA_NEGOCIO]         DATETIME        NULL,
    [AREA_PRIVADA]          DECIMAL (20, 2) NULL,
    [AREA_CONSTRUIDA]       DECIMAL (20, 2) NULL,
    [PARQUEADERO]           NVARCHAR (MAX)  NULL,
    [AREAS_COMUNES]         NVARCHAR (MAX)  NULL,
    [PROPIETARIO]           NVARCHAR (MAX)  NULL,
    [ESTADO_C]              NVARCHAR (MAX)  NULL,
    [CEDULA_P]              NVARCHAR (MAX)  NULL,
    [LUGAR_EXPE]            NVARCHAR (MAX)  NULL,
    [EXPEDICION]            DATE            NULL,
    [FECHA_NACI]            DATE            NULL,
    [LUGAR]                 NVARCHAR (MAX)  NULL,
    [N_HIJO]                INT             NULL,
    [DOMICILIO]             NVARCHAR (MAX)  NULL,
    [DIRECCION_R]           NVARCHAR (MAX)  NULL,
    [TELEFONO_P]            NVARCHAR (MAX)  NULL,
    [CORREO]                NVARCHAR (MAX)  NULL,
    [EMPRESA]               NVARCHAR (MAX)  NULL,
    [CARGO]                 NVARCHAR (MAX)  NULL,
    [TELFONO_EMP]           NVARCHAR (MAX)  NULL,
    [PROFESION]             NVARCHAR (MAX)  NULL,
    [DIRECCION_EMPR]        NVARCHAR (MAX)  NULL,
    [INGRESO]               DECIMAL (20, 2) NULL,
    [ANTIGUEDAD]            NVARCHAR (MAX)  NULL,
    [NOMBRE_CONY]           NVARCHAR (MAX)  NULL,
    [TIPO_DOCUMENTO_CONY]   NVARCHAR (MAX)  NULL,
    [LUGAR_EXPEDICION]      NVARCHAR (MAX)  NULL,
    [FECHA_EXPEDICION_CUY]  DATETIME        NULL,
    [CEDULA_CUY]            NVARCHAR (MAX)  NULL,
    [TELE_CONY]             NVARCHAR (MAX)  NULL,
    [INTERES_COM]           NVARCHAR (MAX)  NULL,
    [PROYECTO_INT]          NVARCHAR (MAX)  NULL,
    [VALOR_CASA]            NVARCHAR (MAX)  NULL,
    [INICIAL]               NVARCHAR (MAX)  NULL,
    [ADICIONES_EXCLUSIONES] DECIMAL (20, 2) NULL,
    [SUBSIDIO]              DECIMAL (20, 2) NULL,
    [GARAJE]                DECIMAL (20, 2) NULL,
    [DESCUENTO]             DECIMAL (20, 2) NULL,
    [VALOR_SERVICIOGAS]     DECIMAL (20, 2) NULL,
    [INTERESES_SUBROGACION] DECIMAL (20, 2) NULL,
    [CREDITO]               NVARCHAR (MAX)  NULL,
    [BANCO]                 INT             NULL,
    [NO_CREDITO]            NVARCHAR (MAX)  NULL,
    [FECHA_ES]              DATE            NULL,
    [FECHA_ENT]             DATE            NULL,
    [FECHA_SUBRO]           DATE            NULL,
    [ASESOR_INFO]           NVARCHAR (MAX)  NULL,
    [MEDIO_ENT]             NVARCHAR (MAX)  NULL,
    [ASOCIADO]              NVARCHAR (MAX)  NULL,
    [AUT_MENSAJE]           INT             NULL,
    [AUT_CORREO]            INT             NULL,
    [OBSERVACIONES]         NVARCHAR (MAX)  NULL,
    [ID_HOJA]               INT             IDENTITY (1, 1) NOT NULL,
    [SEPARACION]            INT             NULL,
    [CODIGO_F]              NVARCHAR (MAX)  NULL,
    [USER_CREO]             NVARCHAR (MAX)  NULL,
    [USER_CARTERA]          NVARCHAR (MAX)  NULL,
    [DOCUMENTO]             NVARCHAR (MAX)  NULL,
    CONSTRAINT [PK_negocio] PRIMARY KEY CLUSTERED ([ID_NEGOCIO] ASC, [ID_HOJA] ASC)
);







