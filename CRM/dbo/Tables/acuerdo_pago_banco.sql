CREATE TABLE [dbo].[acuerdo_pago_banco] (
    [ID_AC_PF]    INT          IDENTITY (1, 1) NOT NULL,
    [NO_ACUERDO]  VARCHAR (50) NULL,
    [CUOTA]       VARCHAR (50) NULL,
    [FECHA_PAGO]  DATE         NULL,
    [VALOR_CUOTA] DECIMAL (18) NULL,
    CONSTRAINT [PK_acuerdo_pago_banco] PRIMARY KEY CLUSTERED ([ID_AC_PF] ASC)
);

