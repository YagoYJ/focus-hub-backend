import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const PORT = process.env.PORT || 3333

const db = new PrismaClient()

const app = new Elysia()
  .get(
    '/groups',
    async () => db.group.findMany()
  )
  .post(
    '/groups',
    async ({ body }) => db.group.create({
      data: body
    }), {
    body: t.Object({
      name: t.String()
    })
  }
  )
  .listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)