import { prioritiesRepository } from "../../repository";
import { GetPriorityByIdUseCaseParams } from "./types";

async function execute({ priorityId}: GetPriorityByIdUseCaseParams) {
    const result = await prioritiesRepository.getById(priorityId)

    return result;
}

export const getPriorityByIdUseCase = {
    execute
}