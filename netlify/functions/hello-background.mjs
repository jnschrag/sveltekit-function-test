export default async (req, context) => {
  // await someLongRunningTask();

  console.log("Background function done");

  return new Response(`This background function ran successfully!`);
};
