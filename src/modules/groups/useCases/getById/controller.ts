import { groupErrorMessages } from "../../errorMessages";
import { GetGroupByIdControllerParams } from "./types";
import { getGroupByIdUseCase } from "./useCase"

async function handle({ id }: GetGroupByIdControllerParams) {
    try {
        const result = await getGroupByIdUseCase.execute(id)

        if(!result) {
            throw groupErrorMessages.GROUP_DOES_NOT_EXISTS
        }
    
        return result;
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const getGroupByIdController = {
    handle
}