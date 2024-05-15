import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = 'edge'; 
const app = new Hono().basePath('/api')

app
  .get('/hello', (c)=>{
    return c.json({
        message: "Hello next js"
    })
   })
  .get('/hello/:seq', (c)=>{
    const seq = c.req.param("seq");
     
    return c.json({
        message: "welcome back",
        seq: seq
    })
  })

export const GET = handle(app)

export const POST = handle(app)

export const UPDATE = handle(app)

export const DELETE = handle(app)