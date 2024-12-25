import { Hono } from "hono";
import type { Context, Next } from "hono";

const app = new Hono();

async function authMiddleware(c: Context, next: Next) {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("Unauthorized", 401);
  }
}

app.post("/", authMiddleware, async (c: Context) => {
  try {
    const body = await c.req.json();
    console.log(body);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello world");
});

export default app;
