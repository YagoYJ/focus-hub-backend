import { t } from "elysia";

export const listAllPrioritiesDTO = {
    params: t.Object({
        groupId: t.String()
    }),
    query: t.Object({
        limit: t.Optional(t.String())
    })
}