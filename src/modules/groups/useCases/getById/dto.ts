import { t } from "elysia";

export const getGroupByIdDTO = {
    params: t.Object({
        id: t.String()
    })
}