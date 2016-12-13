CREATE TABLE [dbo].[FechasAval] (
    [Id]              INT      IDENTITY (1, 1) NOT NULL,
    [FechaInspeccion] DATETIME NULL,
    [idRegistro]      INT      NULL,
    CONSTRAINT [PK_FechasAval] PRIMARY KEY CLUSTERED ([Id] ASC)
);

