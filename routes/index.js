const router = require("koa-router")();
const fs = require('fs');

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Tencent CloudBase + Koa",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
    name: "ppm",
  };
});
router.get("/ppmiao", async (ctx, next) => {
  try {
    const data = fs.readFileSync('./json/ppmiao.json', 'utf8')
    ctx.body = data;
  } catch (err) {
    ctx.body = err;
  }
});

module.exports = router;
