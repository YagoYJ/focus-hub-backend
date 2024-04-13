import Elysia from "elysia";
import { groupsRoutes } from "./routes"
import { getAllGroupsController } from "./useCases/getAll/controller";
import { getGroupByIdController } from "./useCases/getById/controller";
import { getGroupByIdDTO } from "./useCases/getById/dto";
import { createGroupController } from "./useCases/create/controller";
import { createGroupDTO } from "./useCases/create/dto";
import { updateGroupNameController } from "./useCases/updateName/controller";
import { updateGroupNameDTO } from "./useCases/updateName/dto";
import { groupErrorMessages } from "./errorMessages";

export const groups = new Elysia({ prefix: "/groups" })
    .get(
        groupsRoutes.getAll,
        getAllGroupsController.handle
    )
    .get(
        groupsRoutes.getById,
        ({ params }) => getGroupByIdController.handle(params),
        {
            ...getGroupByIdDTO,
            error({ error, set }) {
                if (error.message === groupErrorMessages.GROUP_DOES_NOT_EXISTS) {
                    set.status = "Not Found"
                }

                return error
            }
        }
    )
    .post(
        groupsRoutes.create,
        ({ body }) => createGroupController.handle(body),
        {
            ...createGroupDTO,
            afterHandle({ set, response }) {
                set.status = "Created"
                return response
            },
            error({ error, set }) {
                if (error.message === groupErrorMessages.EXISTS_GROUP_NAME) {
                    set.status = "Conflict"
                }

                return error
            }
        },
    )
    .patch(
        groupsRoutes.update,
        ({ params, body }) => updateGroupNameController.handle(params, body),
        {
            ...updateGroupNameDTO,
            error({ error, set }) {
                if (error.message === groupErrorMessages.GROUP_DOES_NOT_EXISTS) {
                    set.status = "Not Found"
                }

                if (error.message === groupErrorMessages.EXISTS_GROUP_NAME) {
                    set.status = "Conflict"
                }

                return error
            }
        }
    )