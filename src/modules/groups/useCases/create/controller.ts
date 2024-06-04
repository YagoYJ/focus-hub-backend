import { groupErrorMessages } from "../../errorMessages";
import { groupRepository } from "../../repository";
import { CreateGroupControllerParams } from "./types";
import { createGroupUseCase } from "./useCase"

async function handle({ name }: CreateGroupControllerParams) {
    try {
        const groupAlreadyExists = await groupRepository.getByName(name)

        if (groupAlreadyExists) {
            throw groupErrorMessages.EXISTS_GROUP_NAME
        }

        const result = await createGroupUseCase.execute(name)

        return result
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const createGroupController = {
    handle
}