
import { prioritiesRepository } from "../../repository";
import { priorityErrorMessages } from "../getById/errorMessages";
import { CreatePriorityControllerParams } from "./types";
import { createPriorityUseCase } from "./useCase"

async function handle({ groupId, name, description }: CreatePriorityControllerParams) {
    try {
        const priorityAlreadyExists = await prioritiesRepository.getByName({ groupId, name })

        if (priorityAlreadyExists) {
            throw priorityErrorMessages.EXISTS_PRIORITY_NAME
        }

        const result = await createPriorityUseCase.execute({
            groupId,
            name,
            description
        })

        return result
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const createPriorityController = {
    handle
}