import { t } from "elysia";

export const updateGroupNameDTO = {
    params: t.Object({
        groupId: t.String()
    }),
    body: t.Object({
        name: t.String()
    }),
}