import { GetAllPrioritiesControllerParams } from "./types"
import { getAllPrioritiesUseCase } from "./useCase"

function handle({params, query}: GetAllPrioritiesControllerParams) {
    const {groupId} = params

    const result = getAllPrioritiesUseCase.execute({groupId, ...query})

    return result
}

export const getAllPrioritiesController = {
    handle
}