import { t } from "elysia";

export const completePriorityDTO = {
    params: t.Object({
        priorityId: t.String(),
        groupId: t.String(),
    }),
}