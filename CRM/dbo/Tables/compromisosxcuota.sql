CREATE TABLE [dbo].[compromisosxcuota] (
    [ID]       INT          NOT NULL,
    [ID_TAREA] INT          NULL,
    [CODIGO]   VARCHAR (50) NULL,
    CONSTRAINT [PK_compromisosxcuota] PRIMARY KEY CLUSTERED ([ID] ASC)
);

