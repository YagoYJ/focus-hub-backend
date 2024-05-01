import { t } from "elysia";

export const createPriorityDTO = {
    body: t.Object({
        name: t.String(),
        description: t.String(),
    }),
    params: t.Object({
        groupId: t.String(),
    })
}