import { Elysia } from 'elysia'
import { groups } from './modules/groups'
import { priorities } from './modules/priorities'
import { cors } from '@elysiajs/cors'

const PORT = process.env.PORT || 3333


const app = new Elysia()
  .use(groups)
  .use(priorities)
  .use(cors())
  .listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)