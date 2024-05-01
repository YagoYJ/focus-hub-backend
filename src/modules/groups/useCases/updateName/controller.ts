import { groupErrorMessages } from "../../errorMessages";
import { groupRepository } from "../../repository";
import { UpdateGroupNameControllerBody, UpdateGroupNameControllerParams } from "./types";
import { updateGroupNameUseCase } from "./useCase"

async function handle(
    { groupId }: UpdateGroupNameControllerParams,
    { name }: UpdateGroupNameControllerBody
) {
    try {
        const groupExists = await groupRepository.getById(groupId)
        const groupWithName = await groupRepository.getByName(name)

        if (!groupExists) {
            throw groupErrorMessages.GROUP_DOES_NOT_EXISTS
        }

        if(groupWithName) {
            throw groupErrorMessages.EXISTS_GROUP_NAME
        }

        const result = updateGroupNameUseCase.execute({ groupId, name })

        return result;
    } catch (error: unknown) {
        throw new Error(error as string)
    }
}

export const updateGroupNameController = {
    handle
}