async function createAuction(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      event,
      context,
      // message: "Hello from https://auction-application.io",
    }),
  };
}

export const handler = createAuction;
