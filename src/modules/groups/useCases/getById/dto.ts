import { t } from "elysia";

export const getGroupByIdDTO = {
    params: t.Object({
        groupId: t.String()
    })
}