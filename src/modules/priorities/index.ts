import Elysia from "elysia";
import { prioritiesRoutes } from "./routes"
import { listAllPrioritiesDTO } from "./useCases/getAll/dto";
import { getAllPrioritiesController } from "./useCases/getAll/controller";
import { getPriorityByIdController } from "./useCases/getById/controller";
import { getPriorityByIdDTO } from "./useCases/getById/dto";
import { priorityErrorMessages } from "./useCases/getById/errorMessages";
import { createPriorityController } from "./useCases/create/controller";
import { createPriorityDTO } from "./useCases/create/dto";
import { updatePriorityController } from "./useCases/update/controller";
import { updatePriorityDTO } from "./useCases/update/dto";
import { completePriorityController } from "./useCases/complete/controller";
import { completePriorityDTO } from "./useCases/complete/dto";

export const priorities = new Elysia({ prefix: "/groups/:groupId/priorities" })
    .get(
        prioritiesRoutes.getAll,
        ({ params, query }) => getAllPrioritiesController.handle({params, query}),
        { ...listAllPrioritiesDTO }

    )
    .get(
        prioritiesRoutes.getById,
        ({ params }) => getPriorityByIdController.handle(params),
        {
            ...getPriorityByIdDTO,
            error({ error, set }) {
                if (error.message === priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS) {
                    set.status = "Not Found"
                }

                return error
            }
        }
    )
    .post(
        prioritiesRoutes.create,
        ({ body, params }) => createPriorityController.handle({
            groupId: params.groupId,
            name: body.name,
            description: body.description,
        }),
        {
            ...createPriorityDTO,
            afterHandle({ set, response }) {
                set.status = "Created"
                return response
            },
            error({ error, set }) {
                if (error.message === priorityErrorMessages.EXISTS_PRIORITY_NAME) {
                    set.status = "Conflict"
                }

                return error
            }
        },
    )
    .put(
        prioritiesRoutes.update,
        ({ params, body }) => updatePriorityController.handle({
            priorityId: params.priorityId,
            groupId: params.groupId,
            name: body.name,
            description: body.description,
        }),
        {
            ...updatePriorityDTO,
            error({ error, set }) {
                if (error.message === priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS) {
                    set.status = "Not Found"
                }

                if (error.message === priorityErrorMessages.EXISTS_PRIORITY_NAME) {
                    set.status = "Conflict"
                }

                return error
            }
        }
    )
    .patch(
        prioritiesRoutes.complete,
        ({ params }) => completePriorityController.handle({
            priorityId: params.priorityId
        }),
        {
            ...completePriorityDTO,
            error({ error, set }) {
                if (error.message === priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS) {
                    set.status = "Not Found"
                }

                if (error.message === priorityErrorMessages.PRIORITY_COMPLETED) {
                    set.status = "Bad Request"
                }

                return error
            }
        }
    )