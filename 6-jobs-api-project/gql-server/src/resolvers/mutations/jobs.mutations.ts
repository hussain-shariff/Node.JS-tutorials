import { Tcontext } from "../../helpers/context"
import jobsModel from "../../model/jobSchema"
import { Tjob } from "../../types/common.types"
import { TcreateJobInput } from "../../types/common.types"

export const createJobMutation = async (
	parent: any,
	{ input }: { input: TcreateJobInput },
	context: Tcontext
): Promise<Tjob> => {
	const { userID } = context
	const job = (await jobsModel.create({
		...input,
		createdBy: userID,
	})) as unknown as Tjob
	return job
}

export const updateJobMutation = async (
	parent: any,
	{ id, input }: { id: string; input: TcreateJobInput },
	context: Tcontext
): Promise<Tjob> => {
	const { userID } = context
	const job = (await jobsModel.findOneAndUpdate(
		{ _id: id, createdBy: userID },
		{ ...input },
		{ new: true }
	)) as unknown as Tjob
	return job
}

export const deleteJobMutation = async (
	parent: any,
	{ id }: { id: string },
	context: Tcontext
): Promise<Tjob> => {
	const { userID } = context
	const job = (await jobsModel.findOneAndDelete({
		_id: id,
		createdBy: userID,
	})) as unknown as Tjob
	return job
}
