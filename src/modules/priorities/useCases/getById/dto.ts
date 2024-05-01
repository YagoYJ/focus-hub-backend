import { t } from "elysia";

export const getPriorityByIdDTO = {
    params: t.Object({
        groupId: t.String(),
        priorityId: t.String()
    })
}