import data from "@/lib/json/products/products.json";

export async function GET() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
