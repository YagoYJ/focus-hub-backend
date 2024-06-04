import { groupRepository } from "../../repository"

function execute() {
    const result = groupRepository.getAll()

    return result;
}

export const getAllGroupsUseCase = {
    execute
}