import { Tcontext } from "../../helpers/context"
import jobsModel from "../../model/jobSchema"
import mongoose from "mongoose"
import moment from "moment"
import { TgetAllJobsResponse, Tjob } from "../../types/common.types"

export const getAllJobsQuery = async (
	parent: any,
	args: any,
	context: Tcontext
): Promise<TgetAllJobsResponse> => {
	const { userID } = context
	const jobs = await jobsModel.find({ createdBy: userID }).sort("createdAt") as unknown as Tjob[]
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
	return { count: jobs.length, jobs, monthlyApplications: monthlyApplications[0] }
}
