import data from "@/lib/json/dashboard/total-sessions.json";

export async function GET() {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
