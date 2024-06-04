import { t } from "elysia";

export const createGroupDTO = {
    body: t.Object({
        name: t.String()
    })
}