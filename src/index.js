export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    let body = null;
    try {
      body = await request.json();
    } catch {
      body = null;
    }

    const userQuery =
      body?.query ?? body?.message ?? body?.prompt ?? body?.input ?? "";

    return Response.json({
      ok: true,
      feature: "hello_world",
      reply: `Hello World! You said: ${userQuery}`,
    });
  },
};

