import App from "koa-serverless-ready";
import { join } from "path";
import { readFileSync } from "fs";
import serve from "koa-static";
let middlewares = [];
let enableStatic = true;
let enableSinglePageApp = true;

if (enableStatic) {
  middlewares.push(serve(join(process.cwd(), "public")));
}

if (enableSinglePageApp) {
  middlewares.push(async function(ctx) {
    ctx.body = readFileSync("./public/index.html").toString();
  });
}

let app = App({ middlewares });
app.run();
