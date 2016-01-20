CREATE TABLE [dbo].[bitacora_tareas] (
    [IDBITACORA] INT           IDENTITY (1, 1) NOT NULL,
    [TAREA]      INT           NULL,
    [MOTIVO]     VARCHAR (120) NULL,
    [FECHAMOD]   DATE          NULL,
    PRIMARY KEY CLUSTERED ([IDBITACORA] ASC)
);

