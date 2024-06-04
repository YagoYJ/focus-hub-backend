import { prioritiesRepository } from "../../repository"
import { CreatePriorityParams } from "../../repository/types"

async function execute({ groupId, name, description }: CreatePriorityParams) {
    const result = await prioritiesRepository.create({
        groupId,
        name,
        description
    })

    return result
}

export const createPriorityUseCase = {
    execute
}