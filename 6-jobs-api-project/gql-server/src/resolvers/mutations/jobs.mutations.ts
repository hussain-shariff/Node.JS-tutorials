import { Tcontext } from "../../helpers/context"
import jobsModel from "../../model/jobSchema"
import { Tjob, Tuser } from "../../types/common.types"
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

export const updateUser = async (
	parent: any,
	{ input, id }: { input: Tuser, id: string },
	context: Tcontext
): Promise<Tuser> => {
	const { userID } = context
	const user = (await jobsModel.findOneAndUpdate(
		{ createdBy: userID, _id: id },
		{ ...input },
		{ new: true }
	)) as unknown as Tuser
	return user
}
