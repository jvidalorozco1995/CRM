CREATE TABLE [dbo].[historial_clientes] (
    [ID_HISTORIAL] INT          IDENTITY (1, 1) NOT NULL,
    [CLIENTEH]     VARCHAR (13) NULL,
    [TRABAJADOR]   VARCHAR (30) NULL,
    [DESCRIPCIONH] VARCHAR (90) NULL,
    [FECHA]        DATE         NULL,
    CONSTRAINT [PK__historia__76E6C502B92FC233] PRIMARY KEY CLUSTERED ([ID_HISTORIAL] ASC),
    CONSTRAINT [FK__historial__clien__1F04813B] FOREIGN KEY ([CLIENTEH]) REFERENCES [dbo].[clientes] ([CEDULA]),
    CONSTRAINT [FK__historial__clien__4F47C5E3] FOREIGN KEY ([CLIENTEH]) REFERENCES [dbo].[clientes] ([CEDULA]),
    CONSTRAINT [FK__historial__traba__1FF8A574] FOREIGN KEY ([TRABAJADOR]) REFERENCES [dbo].[trabajadores] ([T_CEDULA]),
    CONSTRAINT [FK__historial__traba__503BEA1C] FOREIGN KEY ([TRABAJADOR]) REFERENCES [dbo].[trabajadores] ([T_CEDULA])
);



