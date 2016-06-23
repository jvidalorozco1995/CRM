CREATE TABLE [dbo].[ActividadxTramite] (
    [Id]           INT IDENTITY (1, 1) NOT NULL,
    [Id_tramite]   INT NULL,
    [Id_Actividad] INT NULL,
    [Posicion]     INT NULL,
    CONSTRAINT [PK_ActividadxTramite] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ActividadxTramite_Actividades] FOREIGN KEY ([Id_Actividad]) REFERENCES [dbo].[Actividades] ([id]),
    CONSTRAINT [FK_ActividadxTramite_Tramites] FOREIGN KEY ([Id_tramite]) REFERENCES [dbo].[Tramites] ([id])
);










GO
CREATE TRIGGER [dbo].[triggerAcxTramiteInsert] ON [dbo].[ActividadxTramite]


AFTER INSERT
	AS

	(SELECT Posicion  FROM INSERTED)



   
  BEGIN
    UPDATE  ActividadxTramite set posicion = (SELECT Posicion  FROM INSERTED) + 1
   where Id = (select MIN(Id) from ActividadxTramite where Posicion = (SELECT Posicion  FROM INSERTED))
	END
GO
DISABLE TRIGGER [dbo].[triggerAcxTramiteInsert]
    ON [dbo].[ActividadxTramite];

