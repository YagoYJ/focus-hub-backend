import { groupRepository } from "../../repository"

async function execute(groupId: string) {
    const result = await groupRepository.getById(groupId)

    return result;
}

export const getGroupByIdUseCase = {
    execute
}