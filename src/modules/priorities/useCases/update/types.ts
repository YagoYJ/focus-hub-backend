export type UpdatePriorityControllerParams = {
    groupId: string,
    priorityId: string,
    name: string,
    description: string,
}

export type UpdatePriorityUseCase = {
    priorityId: string,
    name: string,
    description: string,
}