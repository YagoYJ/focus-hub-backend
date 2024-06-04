import { prioritiesRepository } from "../../repository";
import { GetAllPrioritiesUseCaseParams } from "./types";

async function execute({groupId, limit}: GetAllPrioritiesUseCaseParams) {
    const result = await prioritiesRepository.getAll({groupId, limit})

    return result;
}

export const getAllPrioritiesUseCase = {
    execute
}