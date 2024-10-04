import { Application, type Context, Router, send } from "@oak";
import { join } from "@std/path";
import { createTemplateIndex } from "~/view/index.ts";
import { createListTemplate } from "~/view/list-books.ts";

const app = new Application();
const router = new Router();

router.get("/static/:path+", async (ctx: Context) => {
    await send(ctx, ctx.request.url.pathname, {
        root: join(Deno.cwd(), "public"),
    });
});

router.get("/", ({ response }: Context) => {
    response.body = createTemplateIndex();
});

router.get("/books", async ({ response }: Context) => {
    response.body = await createListTemplate();
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
