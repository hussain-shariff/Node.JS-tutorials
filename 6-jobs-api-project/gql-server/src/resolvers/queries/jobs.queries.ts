import { Tcontext } from "../../helpers/context"
import jobsModel from "../../model/jobSchema"
import mongoose from "mongoose"
import moment from "moment"
import {
	TgetAllJobsResponse,
	Tjob,
	Tparams,
	Tuser,
} from "../../types/common.types"
import authModel from "../../model/authSchema"

type TqueryObject = {
	createdBy: string
	status?: string
	jobType?: string
	position?: {
		$regex: string
		$options: string
	}
}

export const getAllJobsQuery = async (
	parent: any,
	args: any,
	context: Tcontext
): Promise<TgetAllJobsResponse> => {
	const { userID } = context
	const jobs = (await jobsModel
		.find({ createdBy: userID })
		.sort("createdAt")) as unknown as Tjob[]
	let monthlyApplications = await jobsModel.aggregate([
		{ $match: { createdBy: new mongoose.Types.ObjectId(userID) } },
		{
			$group: {
				_id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
				count: { $sum: 1 },
			},
		},
		{ $sort: { "_id.year": -1, "_id.month": -1 } },
		{ $limit: 6 },
	])
	monthlyApplications = monthlyApplications
		.map((item) => {
			const {
				_id: { year, month },
				count,
			} = item
			const date = moment()
				.month(month - 1)
				.year(year)
				.format("MMM Y")
			return { date, count }
		})
		.reverse()
	return {
		count: jobs.length,
		jobs,
		monthlyApplications: monthlyApplications[0],
	}
}

export const getJobQuery = async (
	parent: any,
	{ id }: { id: string },
	context: Tcontext
): Promise<Tjob> => {
	const { userID } = context
	const job = (await jobsModel.findOne({
		_id: id,
		createdBy: userID,
	})) as unknown as Tjob
	return job
}

export const getCurrentUserQuery = async (
	parent: any,
	args: any,
	context: Tcontext
): Promise<Tuser> => {
	const { userID } = context
	const user = (await authModel.findOne({ _id: userID })) as unknown as Tuser
	return user
}

export const getFilteredJobsQuery = async (
	parent: any,
	{ params }: { params: Tparams },
	context: Tcontext
): Promise<Tjob[]> => {
	const { userID } = context
	const { status, jobType, search, sort } = params
	const queryObject: TqueryObject = {
		createdBy: userID,
	}
	if (status && status !== "all") {
		queryObject.status = status
	}
	if (jobType && jobType !== "all") {
		queryObject.jobType = jobType
	}
	if (search) {
		queryObject.position = { $regex: search, $options: "i" }
	}
	let querySort = ""
	if (sort === "latest") {
		querySort = "-createdAt"
	}
	if (sort === "oldest") {
		querySort = "createdAt"
	}
	if (sort === "a-z") {
		querySort = "position"
	}
	if (sort === "z-a") {
		querySort = "-position"
	}
	const jobs = (await jobsModel
		.find(queryObject)
		.sort(querySort)) as unknown as Tjob[]
	return jobs
}
