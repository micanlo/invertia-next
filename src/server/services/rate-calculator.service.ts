const itp = {
  valencia: 0.1,
};

const calculateRates = (data: IdealistaResponse): InvertiaResponse => {
  // Lógica y cálculo de ratios
  let is_new = false;
  let province = data.province;

  // C O S T E S   I N I C I A L E S  //
  // Costes compraventa
  let price = data.price;
  let impuestos = price * itp.valencia; // may lety between 6%-11% depending on province and age
  let notaria_registro = 3000;
  let honorarios_inmobiliaria = price * 0.01;
  let costes_totales_iniciales =
    price + impuestos + notaria_registro + honorarios_inmobiliaria;

  // Costes acondicionamiento
  let state = 4; // ---> ESTIMAR CON IA
  let reforma =
    state == 1
      ? 70000
      : state == 2
      ? 50000
      : state == 3
      ? 20000
      : state == 4
      ? 8000
      : 0;
  let mobiliario_decoracion = state == 5 ? 150 : state == 4 ? 800 : 1600;
  let otros = 200;

  // C O S T E S   M E N S U A L E S  //
  let ibi = (price * 0.08) / 12;
  // let basuras
  // let seguro_hogar
  // let comunidad
  // let suministros
  // let reparaciones
  let costes_totales_mensuales = ibi;

  // H I P O T E C A  //
  let cuota = 680;

  // I N G R E S O S   M E N S U A L E S  //
  let alquiler = price * 1; // ---> ESTIMAR CON IA

  // R A T I O S   F I N A N C I E R O S  //
  let rentabilidad_bruta = (alquiler * 12) / price;
  let rentabilidad_neta =
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
