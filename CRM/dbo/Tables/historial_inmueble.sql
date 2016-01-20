CREATE TABLE [dbo].[historial_inmueble] (
    [ID_HISTORIAL]  INT          IDENTITY (1, 1) NOT NULL,
    [CLIENTE]       VARCHAR (13) NULL,
    [INMUEBLE]      VARCHAR (16) NULL,
    [FECHA]         DATE         NULL,
    [DESCRIPCION_S] VARCHAR (90) NULL,
    CONSTRAINT [PK_historial_inmueble] PRIMARY KEY CLUSTERED ([ID_HISTORIAL] ASC),
    CONSTRAINT [FK__historial__CLIEN__6F2063EF] FOREIGN KEY ([CLIENTE]) REFERENCES [dbo].[clientes] ([CEDULA])
);

