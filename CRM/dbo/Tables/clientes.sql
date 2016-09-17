CREATE TABLE [dbo].[clientes] (
    [CEDULA]              VARCHAR (13)   NOT NULL,
    [TIPO_PERSONA]        INT            NULL,
    [TIPO_DOCUMENTO]      INT            NULL,
    [DIRECCION_CORRESPON] NVARCHAR (MAX) NULL,
    [NOMBRES]             VARCHAR (50)   NULL,
    [P_APELLIDO]          VARCHAR (40)   NULL,
    [S_APELLIDO]          VARCHAR (40)   NULL,
    [ESTADO_CIVIL]        VARCHAR (30)   NULL,
    [DIRECCION]           VARCHAR (60)   NOT NULL,
    [BARRIO]              VARCHAR (50)   NULL,
    [CELULAR]             VARCHAR (50)   NULL,
    [TELEFONO2]           VARCHAR (13)   NULL,
    [PROYEC_INTERES]      VARCHAR (10)   NULL,
    [EMAIL]               VARCHAR (50)   NULL,
    [EMPRESA]             INT            NULL,
    [SUELDO]              VARCHAR (60)   NULL,
    [PRESU_COMPRA]        VARCHAR (40)   NULL,
    [INMU_INTERES]        VARCHAR (20)   NULL,
    [INTERES_VI]          VARCHAR (30)   NULL,
    [MOT_COMPRA]          VARCHAR (12)   NULL,
    [SALA_VENTA]          INT            NULL,
    [ASESOR]              VARCHAR (30)   NULL,
    [FECHACREACION]       DATE           NULL,
    [FECHAMOD]            DATE           NULL,
    [INFORMACION]         VARCHAR (80)   NULL,
    [ESTADO]              VARCHAR (1)    NULL,
    [ASOCIADO]            VARCHAR (15)   NULL,
    CONSTRAINT [PK_clientes] PRIMARY KEY CLUSTERED ([CEDULA] ASC),
    CONSTRAINT [FK__clientes__ASESOR__0697FACD] FOREIGN KEY ([ASESOR]) REFERENCES [dbo].[trabajadores] ([T_CEDULA]),
    CONSTRAINT [FK__clientes__EMPRES__1F98B2C1] FOREIGN KEY ([EMPRESA]) REFERENCES [dbo].[empresas] ([ID_EMP]),
    CONSTRAINT [FK__clientes__EMPRES__5CD6CB2B] FOREIGN KEY ([EMPRESA]) REFERENCES [dbo].[empresas] ([ID_EMP]),
    CONSTRAINT [FK__clientes__PROYEC__32E0915F] FOREIGN KEY ([PROYEC_INTERES]) REFERENCES [dbo].[proyectos] ([ID_PROYEC])
);







