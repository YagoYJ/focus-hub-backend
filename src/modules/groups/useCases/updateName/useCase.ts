import { groupRepository } from "../../repository";
import { UpdateGroupNameUseCase } from "./types";

async function execute({ id, name }: UpdateGroupNameUseCase) {
    const result = await groupRepository.updateName({ id, name })

    return result
}

export const updateGroupNameUseCase = {
    execute
}