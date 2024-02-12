export default async (req, context) => {
  // await someLongRunningTask();

  console.log("Call background function");

  // Do something with the `chart_template` folder here

  return new Response(
    JSON.stringify({
      message: "success!",
    })
  );
};
