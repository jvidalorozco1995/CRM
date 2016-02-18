﻿CREATE TABLE [dbo].[bloques] (
    [ID_BLOQUE]   VARCHAR (10) NOT NULL,
    [BLOQUE_OBRA] VARCHAR (10) NULL,
    [BLOQUE_CODI] VARCHAR (10) NULL,
    [NOMBRE_BLO]  VARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([ID_BLOQUE] ASC),
    FOREIGN KEY ([BLOQUE_OBRA]) REFERENCES [dbo].[proyectos] ([ID_PROYEC]) ON DELETE CASCADE
);
