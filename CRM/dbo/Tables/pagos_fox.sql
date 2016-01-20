CREATE TABLE [dbo].[pagos_fox] (
    [ID]                INT           IDENTITY (1, 1) NOT NULL,
    [Referencia1]       VARCHAR (50)  NULL,
    [Obra]              VARCHAR (30)  NULL,
    [Codterc]           VARCHAR (15)  NULL,
    [Nit]               VARCHAR (50)  NULL,
    [Recibo]            VARCHAR (50)  NULL,
    [Nrecibo]           VARCHAR (50)  NULL,
    [Estado]            VARCHAR (30)  NULL,
    [Fecharecibo]       VARCHAR (50)  NULL,
    [Concepto]          VARCHAR (300) NULL,
    [Vlrrecibo]         VARCHAR (30)  NULL,
    [Nconsignacion]     VARCHAR (20)  NULL,
    [Fechaconsignacion] VARCHAR (50)  NULL,
    [Vlrcuotaaplicado]  VARCHAR (50)  NULL,
    [Detallecuota]      VARCHAR (50)  NULL,
    [Usuario]           VARCHAR (50)  NULL,
    [Fechaelaboracion]  VARCHAR (50)  NULL,
    [Ncheque]           VARCHAR (50)  NULL,
    [Nota]              VARCHAR (300) NULL,
    CONSTRAINT [PK_pagos_fox] PRIMARY KEY CLUSTERED ([ID] ASC)
);

