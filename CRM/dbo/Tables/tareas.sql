﻿CREATE TABLE [dbo].[tareas] (
    [ID_TAREA]    INT           IDENTITY (1, 1) NOT NULL,
    [CLIENTE]     VARCHAR (13)  NULL,
    [TRABAJADOR]  VARCHAR (30)  NULL,
    [CONCEPTO]    VARCHAR (100) NULL,
    [NEGOCIO]     VARCHAR (50)  NULL,
    [FECHAINICIO] DATE          NULL,
    [FECHAFIN]    DATE          NULL,
    [ESTADO]      VARCHAR (2)   NULL,
    CONSTRAINT [PK__tareas__3484F0F952612800] PRIMARY KEY CLUSTERED ([ID_TAREA] ASC),
    CONSTRAINT [FK__tareas__CLIENTE__47B19113] FOREIGN KEY ([CLIENTE]) REFERENCES [dbo].[clientes] ([CEDULA]),
    CONSTRAINT [FK__tareas__TRABAJAD__571DF1D5] FOREIGN KEY ([TRABAJADOR]) REFERENCES [dbo].[trabajadores] ([T_CEDULA]) ON DELETE CASCADE ON UPDATE CASCADE
);
