import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(
        "Hello World",
        {
          headers: {
            "content-type": "text/plain",
          },
        },
        { status: 200 }
      );
    } else if (url.pathname === "/ice-coffee") {
      return new Response(
        "Ice Coffee  with programming coder ............ ",
        {
          headers: {
            "content-type": "text/plain",
          },
        },
        { status: 200 }
      );
    } else if (url.pathname === "/hot-coffee") {
      return new Response("Hot Coffee", { status: 200 });
    } else {
      return new Response("Not Found -=- 404", {
        status: 404,
      });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
