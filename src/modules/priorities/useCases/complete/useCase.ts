import { prioritiesRepository } from "../../repository";
import { CompletePriorityUseCase } from "./types";

async function execute({ priorityId}: CompletePriorityUseCase) {
    await prioritiesRepository.complete({
        priorityId
    })
}

export const completePriorityUseCase = {
    execute
}