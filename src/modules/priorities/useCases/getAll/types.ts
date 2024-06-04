export type GetAllPrioritiesControllerParams = {
    params: {
        groupId: string
    },
    query: {
        limit?: string
    }
}

export type GetAllPrioritiesUseCaseParams = {
    groupId: string;
    limit?: string;
}