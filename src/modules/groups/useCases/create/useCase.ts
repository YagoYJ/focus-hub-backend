import { groupRepository } from "../../repository"

async function execute(name: string) {
    const result = await groupRepository.create(name)

    return result
}

export const createGroupUseCase = {
    execute
}