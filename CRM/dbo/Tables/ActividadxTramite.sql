CREATE TABLE [dbo].[ActividadxTramite] (
    [Id]           INT IDENTITY (1, 1) NOT NULL,
    [Id_tramite]   INT NULL,
    [Id_Actividad] INT NULL,
    CONSTRAINT [PK_ActividadxTramite] PRIMARY KEY CLUSTERED ([Id] ASC)
);



