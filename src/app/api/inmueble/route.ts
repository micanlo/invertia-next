import { idealistaService } from "@/server/services/idealista.service";
import { rateCalulator } from "@/server/services/rate-calculator.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  console.log(url);

  // Calls Idealista API
  const dataIdealista: IdealistaResponse = await idealistaService.getData(url!);

  // Calculates the radios
  const dataInvertia: InvertiaResponse =
    rateCalulator.calculateRates(dataIdealista);

  return NextResponse.json(dataInvertia);
}
