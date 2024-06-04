import { prioritiesRepository } from "../../repository";
import { UpdatePriorityUseCase } from "./types";

async function execute({ priorityId, name, description }: UpdatePriorityUseCase) {
    const result = await prioritiesRepository.update({
        priorityId,
        name,
        description
    })

    return result
}

export const updatePriorityUseCase = {
    execute
}