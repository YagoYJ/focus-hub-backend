import { t } from "elysia";

export const updatePriorityDTO = {
    params: t.Object({
        groupId: t.String(),
        priorityId: t.String(),
    }),
    body: t.Object({
        name: t.String(),
        description: t.String(),
    }),
}