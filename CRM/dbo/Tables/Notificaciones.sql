CREATE TABLE [dbo].[Notificaciones] (
    [Id]           INT          IDENTITY (1, 1) NOT NULL,
    [Id_Actividad] INT          NULL,
    [Estado]       INT          NULL,
    [Fecha]        DATETIME     NULL,
    [Usuario]      VARCHAR (50) NULL,
    [Descripcion]  VARCHAR (50) NULL,
    [Enviado]      INT          NULL,
    [TipoFecha]    INT          NULL,
    CONSTRAINT [PK_Notificaciones] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Notificaciones_Actividades] FOREIGN KEY ([Id_Actividad]) REFERENCES [dbo].[Actividades] ([id])
);

