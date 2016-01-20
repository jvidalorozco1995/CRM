CREATE TABLE [dbo].[historial_acuerdos_pagos] (
    [ID_HISTORIAL] INT          IDENTITY (1, 1) NOT NULL,
    [CLIENTEH]     VARCHAR (13) NULL,
    [TRABAJADOR]   VARCHAR (30) NULL,
    [DESCRIPCIONH] VARCHAR (90) NULL,
    [FECHA]        DATE         NULL
);

