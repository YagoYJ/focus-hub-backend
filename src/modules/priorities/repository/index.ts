import { prisma } from "../../../db/prisma";
import { GetAllPrioritiesUseCaseParams } from "../useCases/getAll/types";
import { CompletePriorityRepository, CreatePriorityParams, GetByNameParams, UpdatePriorityRepository } from "./types";

function getAll({groupId, limit}: GetAllPrioritiesUseCaseParams) {
    const result = prisma.priority.findMany({
        where: {
            groupId
        },
        take: limit ? Number(limit) : undefined
    })

    return result;
}

async function getById(id: string) {
    const result = await prisma.priority.findUnique({
        where: {
            id
        }
    })

    return result;
}

async function getByName({ groupId, name }: GetByNameParams) {
    const result = await prisma.priority.findUnique({
        where: {
            groupId,
            name
        }
    })

    return result;
}

async function create({ name, description, groupId }: CreatePriorityParams) {
    const data = await prisma.priority.create({
        data: {
            name,
            description,
            groupId,
            completed: false,
        }
    })

    return data
}

async function update({ priorityId, name, description }: UpdatePriorityRepository) {
    const data = await prisma.priority.update({
        where: {
            id: priorityId
        },
        data: {
            name,
            description
        }
    })

    return data
}

async function complete({ priorityId }: CompletePriorityRepository) {
    await prisma.priority.update({
        where: {
            id: priorityId
        },
        data: {
            completed: true
        }
    })
}

export const prioritiesRepository = {
    getAll,
    getById,
    getByName,
    create,
    update,
    complete
}