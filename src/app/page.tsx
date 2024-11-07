"use client";
import DataDashboard from "@/components/layout/data_dashboard";
import Header from "@/components/layout/header";
import { idealistaService } from "@/server/services/idealista.service";
import { FormEvent, useState } from "react";

export default function Home() {
  const [dataInvertia, setDataInvertia] = useState<InvertiaResponse | null>(
    null
  );
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const url = form.url.value;

    const res = await fetch("/api/inmueble?url=" + url);
    const data = await res.json();
    setDataInvertia(data);
  };

  return (
    <div className="home-container">
      <h1>
        ¿Cómo de <span className="bold">rentable</span> es el{" "}
        <span className="bold">inmueble</span>?
      </h1>

      <form onSubmit={onSubmit} className="input-container">
        <input
          type="text"
          name="url"
          placeholder="idealista.com/inmueble/15684914"
        />
        <button type="submit">Valorar inmueble</button>
      </form>
      {dataInvertia === null ? (
        <></>
      ) : (
        <div id="">
          <DataDashboard dataInvertia={dataInvertia} />
        </div>
      )}
    </div>
  );
}
