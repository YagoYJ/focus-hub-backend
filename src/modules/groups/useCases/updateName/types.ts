export type UpdateGroupNameControllerParams = {
    groupId: string
}

export type UpdateGroupNameControllerBody = {
    name: string
}

export type UpdateGroupNameUseCase = {
    groupId: string
    name: string
}