CREATE TABLE [dbo].[ActInmuebles] (
    [Codigo]   INT          IDENTITY (1, 1) NOT NULL,
    [Fecha]    DATETIME     NULL,
    [Proyecto] VARCHAR (3)  NULL,
    [Usuario]  VARCHAR (30) NULL,
    CONSTRAINT [PK_ActualizacionInmuebles] PRIMARY KEY CLUSTERED ([Codigo] ASC)
);

