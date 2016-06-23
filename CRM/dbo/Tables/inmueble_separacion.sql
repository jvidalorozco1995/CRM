CREATE TABLE [dbo].[inmueble_separacion] (
    [ID_SEPARACION]   INT          IDENTITY (1, 1) NOT NULL,
    [CLIENTE]         VARCHAR (13) NOT NULL,
    [INMUEBLE]        VARCHAR (16) NULL,
    [FECHASEPARACION] DATE         NULL,
    [FECHAFINAL]      DATE         NULL,
    [ESTADO]          VARCHAR (1)  NULL,
    [ASESOR_T]        VARCHAR (30) NULL,
    CONSTRAINT [PK_inmueble_separacion] PRIMARY KEY CLUSTERED ([ID_SEPARACION] ASC),
    CONSTRAINT [FK__inmueble___INMUE__20CCCE1C] FOREIGN KEY ([INMUEBLE]) REFERENCES [dbo].[inmuebles] ([REFERENCIA]) ON DELETE CASCADE
);





