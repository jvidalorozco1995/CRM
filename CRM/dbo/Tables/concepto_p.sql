﻿CREATE TABLE [dbo].[concepto_p] (
    [ID_CON]      INT          IDENTITY (1, 1) NOT NULL,
    [COD_CON]     VARCHAR (3)  NULL,
    [DESCRIPCION] VARCHAR (30) NULL,
    CONSTRAINT [PK__concepto__2BF968CC04440AA1] PRIMARY KEY CLUSTERED ([ID_CON] ASC)
);

