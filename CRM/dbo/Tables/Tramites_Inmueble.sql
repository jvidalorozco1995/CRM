CREATE TABLE [dbo].[Tramites_Inmueble] (
    [id]          INT             IDENTITY (1, 1) NOT NULL,
    [id_Tramite]  INT             NULL,
    [Id_Inmueble] VARCHAR (16)    NULL,
    [Porcentaje]  DECIMAL (18, 2) NULL,
    CONSTRAINT [PK_Tramites_Inmueble2] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_Tramites_Inmueble_Tramites] FOREIGN KEY ([id_Tramite]) REFERENCES [dbo].[Tramites] ([id])
);

