import { prisma } from "../../../db/prisma";
import { UpdateGroupNameRepository } from "./types";

function getAll() {
    const result = prisma.group.findMany()

    return result;
}

async function getById(id: string) {
    const group = await prisma.group.findUnique({
        where: {
            id
        }
    })

    return group;
}

async function getByName(name: string) {
    const group = await prisma.group.findUnique({
        where: {
            name
        }
    })

    return group;
}

async function create(name: string) {
    const data = await prisma.group.create({
        data: {
            name,
        }
    })

    return data
}

async function updateName({ groupId, name }: UpdateGroupNameRepository) {
    const data = await prisma.group.update({
        where: {
            id: groupId
        },
        data: {
            name,
        }
    })

    return data
}

export const groupRepository = {
    getAll,
    getById,
    getByName,
    create,
    updateName
}