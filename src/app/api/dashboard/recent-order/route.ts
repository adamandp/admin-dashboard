import data from "@/lib/json/dashboard/recent-order.json";

export async function GET() {
  // return new Response(JSON.stringify(data), {
  //   status: 200,
  //   headers: { "Content-Type": "application/json" },
  // });
  return Response.json(data);
}
