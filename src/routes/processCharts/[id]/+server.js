import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, request }) {
  console.log(params);

  const { a, b } = await request.json();

  console.log("data", a, b);

  return json(a + b);
}
