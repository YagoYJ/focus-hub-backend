import { groupErrorMessages } from "../../../groups/errorMessages";
import { getGroupByIdUseCase } from "../../../groups/useCases/getById/useCase";
import { GetAllPrioritiesControllerParams } from "./types";
import { getAllPrioritiesUseCase } from "./useCase";

async function handle({ params, query }: GetAllPrioritiesControllerParams) {
  const { groupId } = params;

  try {
    const group = await getGroupByIdUseCase.execute(groupId);

    if(!group) {
        throw groupErrorMessages.GROUP_DOES_NOT_EXISTS 
    }

    const result = getAllPrioritiesUseCase.execute({ groupId, ...query });

    return result;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}

export const getAllPrioritiesController = {
  handle,
};
