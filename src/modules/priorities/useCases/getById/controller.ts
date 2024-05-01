import { priorityErrorMessages } from "./errorMessages";
import { GetPriorityByIdControllerParams } from "./types";
import { getPriorityByIdUseCase } from "./useCase";

async function handle({ priorityId }: GetPriorityByIdControllerParams) {
    try {
        const result = await getPriorityByIdUseCase.execute({priorityId})

        if(!result) {
            throw priorityErrorMessages.PRIORITY_DOES_NOT_EXISTS
        }
    
        return result;
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const getPriorityByIdController = {
    handle
}