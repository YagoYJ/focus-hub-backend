import { groupErrorMessages } from "../../errorMessages";
import { GetGroupByIdControllerParams } from "./types";
import { getGroupByIdUseCase } from "./useCase"

async function handle({ groupId }: GetGroupByIdControllerParams) {
    try {
        const result = await getGroupByIdUseCase.execute(groupId)

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