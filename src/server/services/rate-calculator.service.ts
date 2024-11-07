const itp = {
  valencia: 0.1,
};

const calculateRates = (data: IdealistaResponse): InvertiaResponse => {
  // Lógica y cálculo de ratios
  var is_new = false;
  var province = data.province;

  // C O S T E S   I N I C I A L E S  //
  // Costes compraventa
  var price = data.price;
  var impuestos = price * itp.valencia; // may vary between 6%-11% depending on province and age
  var notaria_registro = 3000;
  var honorarios_inmobiliaria = price * 0.01;
  var costes_totales_iniciales =
    price + impuestos + notaria_registro + honorarios_inmobiliaria;

  // Costes acondicionamiento
  var state = 4; // ---> ESTIMAR CON IA
  var reforma =
    state == 1
      ? 70000
      : state == 2
      ? 50000
      : state == 3
      ? 20000
      : state == 4
      ? 8000
      : 0;
  var mobiliario_decoracion = state == 5 ? 150 : state == 4 ? 800 : 1600;
  var otros = 200;

  // C O S T E S   M E N S U A L E S  //
  var ibi = (price * 0.08) / 12;
  // var basuras
  // var seguro_hogar
  // var comunidad
  // var suministros
  // var reparaciones
  var costes_totales_mensuales = ibi;

  // H I P O T E C A  //
  var cuota = 680;

  // I N G R E S O S   M E N S U A L E S  //
  var alquiler = price * 1; // ---> ESTIMAR CON IA

  // R A T I O S   F I N A N C I E R O S  //
  var rentabilidad_bruta = (alquiler * 12) / price;
  var rentabilidad_neta =
    (alquiler * 12 - costes_totales_mensuales * 12) / costes_totales_iniciales;

  // Devolvemos la información + los ratios calculado por Invertia
  return {
    ...data,
    rentabilidadBruta: rentabilidad_bruta,
    rentabilidadNeta: rentabilidad_neta,
  };
};

export const rateCalulator = {
  calculateRates,
};
