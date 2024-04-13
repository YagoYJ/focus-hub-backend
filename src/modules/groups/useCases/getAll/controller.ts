import { getAllGroupsUseCase } from "./useCase"

function handle() {
    const result = getAllGroupsUseCase.execute()

    return result
}

export const getAllGroupsController = {
    handle
}