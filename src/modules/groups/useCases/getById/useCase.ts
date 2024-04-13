import { groupRepository } from "../../repository"

async function execute(id: string) {
    const result = await groupRepository.getById(id)

    return result;
}

export const getGroupByIdUseCase = {
    execute
}