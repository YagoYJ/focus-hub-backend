import { t } from "elysia";

export const updateGroupNameDTO = {
    params: t.Object({
        id: t.String()
    }),
    body: t.Object({
        name: t.String()
    }),
}