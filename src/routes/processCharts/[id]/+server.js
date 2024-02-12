import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, request, fetch }) {
  const { a, b } = await request.json();

  // Call the background function
  const response = await fetch(
    "http://localhost:8888/.netlify/functions/publish-chart-background",
    {
      method: "POST",
      body: JSON.stringify({ a, b }),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const result = await response;

  return new Response(
    JSON.stringify({
      message: "Success.",
      sum: a + b,
    })
  );
}
