import { prioritiesRepository } from "../../repository";
import { priorityErrorMessages } from "../getById/errorMessages";
import { CompletePriorityControllerParams } from "./types";
import { completePriorityUseCase } from "./useCase";

async function handle({
    priorityId,
}: CompletePriorityControllerParams) {
    try {
        const priority = await prioritiesRepository.getById(priorityId)

        if (!priority) {
            throw priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS
        }

        if (priority.completed) {
            throw priorityErrorMessages.PRIORITY_COMPLETED
        }

        await completePriorityUseCase.execute({
            priorityId,
        })

    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const completePriorityController = {
    handle
}