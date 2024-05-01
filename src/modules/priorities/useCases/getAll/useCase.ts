import { prioritiesRepository } from "../../repository";

async function execute(groupId: string) {
    const result = await prioritiesRepository.getAll(groupId)

    return result;
}

export const getAllPrioritiesUseCase = {
    execute
}