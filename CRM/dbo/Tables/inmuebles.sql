﻿CREATE TABLE [dbo].[inmuebles] (
    [REFERENCIA]   VARCHAR (16)  NOT NULL,
    [INMUOBRA]     VARCHAR (10)  NULL,
    [INMUDECS]     VARCHAR (100) NULL,
    [SUC]          VARCHAR (10)  NULL,
    [PPTO]         VARCHAR (6)   NULL,
    [MZA]          VARCHAR (10)  NULL,
    [INMUEBLE]     VARCHAR (10)  NULL,
    [AREA]         VARCHAR (8)   NULL,
    [VAL_INMUEBLE] DECIMAL (18)  NULL,
    [INMUESTADO]   CHAR (1)      NULL,
    CONSTRAINT [PK__inmueble__52D84AE69A2834A3] PRIMARY KEY CLUSTERED ([REFERENCIA] ASC),
    CONSTRAINT [FK__inmuebles__INMUO__02E7657A] FOREIGN KEY ([INMUOBRA]) REFERENCES [dbo].[bloques] ([ID_BLOQUE]) ON DELETE CASCADE
);

