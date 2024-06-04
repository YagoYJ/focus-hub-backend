import { groupRepository } from "../../repository";
import { UpdateGroupNameUseCase } from "./types";

async function execute({ groupId, name }: UpdateGroupNameUseCase) {
    const result = await groupRepository.updateName({ groupId, name })

    return result
}

export const updateGroupNameUseCase = {
    execute
}