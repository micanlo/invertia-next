import React from "react";

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-ES").format(price);
};

const DataDashboard = (props: { dataInvertia: InvertiaResponse }) => {
  return (
    <div>
      <div>{formatPrice(props.dataInvertia.price)} €</div>
      <div>
        {props.dataInvertia.size} m2 | {props.dataInvertia.rooms} hab. | Planta{" "}
        {props.dataInvertia.floor}
        {props.dataInvertia.exterior ? " exterior" : ""}
        {props.dataInvertia.hasLift ? " con ascensor" : "sin ascensor"}{" "}
        {props.dataInvertia.parkingSpace.hasParkingSpace
          ? " | Garaje incluido"
          : ""}
      </div>
      <div>
        <ul>
          <li>- {props.dataInvertia.size} m2 construidos</li>
          <li>- {props.dataInvertia.rooms} habitaciones</li>
          <li>- {props.dataInvertia.bathrooms} baños</li>
          <li>- "{props.dataInvertia.status}" status</li>
          <li>- {formatPrice(props.dataInvertia.priceByArea)} €/m2</li>
          <li>
            <strong>Invertia:</strong>
          </li>
          <li>
            - Rentabilidad Bruta:{" "}
            {props.dataInvertia.rentabilidadBruta.toFixed(2)}%
          </li>
          <li>
            - Rentabilidad Neta:{" "}
            {props.dataInvertia.rentabilidadNeta.toFixed(2)}%
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataDashboard;
