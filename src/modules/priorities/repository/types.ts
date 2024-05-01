export type CreatePriorityParams = {
    name: string
    description: string
    groupId: string
}

export type GetByNameParams = {
    name: string
    groupId: string
}

export type UpdatePriorityRepository = {
    priorityId: string,
    name: string,
    description: string
}

export type CompletePriorityRepository = {
    priorityId: string,
}