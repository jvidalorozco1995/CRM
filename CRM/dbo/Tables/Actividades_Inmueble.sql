CREATE TABLE [dbo].[Actividades_Inmueble] (
    [id]                   INT           IDENTITY (1, 1) NOT NULL,
    [Nombre]               VARCHAR (150) NULL,
    [Descripcion]          VARCHAR (200) NULL,
    [IdTraInmueble]        INT           NULL,
    [ActividadDependiente] INT           NULL,
    [Duracion]             INT           NULL,
    [Simultaneo]           INT           NULL,
    [FechaInicio]          DATETIME      NULL,
    [FechaFin]             DATETIME      NULL,
    [Posicion]             INT           NULL,
    [Estado]               INT           NULL,
    [IdActividad]          INT           NULL,
    CONSTRAINT [PK_Actividades_Inmueble] PRIMARY KEY CLUSTERED ([id] ASC)
);

