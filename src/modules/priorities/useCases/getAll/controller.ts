import { GetAllPrioritiesControllerParams } from "./types"
import { getAllPrioritiesUseCase } from "./useCase"

function handle(params: GetAllPrioritiesControllerParams) {
    const {groupId} = params

    const result = getAllPrioritiesUseCase.execute(groupId)

    return result
}

export const getAllPrioritiesController = {
    handle
}