import { prioritiesRepository } from "../../repository";
import { priorityErrorMessages } from "../getById/errorMessages";
import { UpdatePriorityControllerParams } from "./types";
import { updatePriorityUseCase } from "./useCase"

async function handle({
    priorityId,
    groupId,
    name,
    description
}: UpdatePriorityControllerParams) {
    try {
        const priority = await prioritiesRepository.getById(priorityId)
        const groupWithName = await prioritiesRepository.getByName({ groupId, name })

        if (!priority) {
            throw priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS
        }

        if (priority.name !== name && groupWithName) {
            throw priorityErrorMessages.EXISTS_PRIORITY_NAME
        }

        const result = updatePriorityUseCase.execute({
            priorityId,
            name,
            description
        })

        return result;
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const updatePriorityController = {
    handle
}