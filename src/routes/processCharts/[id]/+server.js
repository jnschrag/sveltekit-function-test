import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, request }) {
  console.log(params);

  const { a, b } = await request.json();

  console.log("data", a, b);

  const response = await fetch("/.netlify/functions/hello-background", {
    method: "POST",
    body: JSON.stringify({ a, b }),
    headers: {
      "content-type": "application/json",
    },
  });

  const result = await response.json();

  console.log(result);

  return json(a + b);
}
