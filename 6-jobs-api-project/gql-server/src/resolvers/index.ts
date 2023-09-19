import { loginMutation, registerMutation } from "./mutations/auth.resolvers"
import { getAllJobsQuery, getCurrentUserQuery, getFilteredJobsQuery, getJobQuery } from "./queries/jobs.queries"
import {
	createJobMutation,
	deleteJobMutation,
	updateJobMutation,
} from "./mutations/jobs.mutations"

const resolvers = {
	Query: {
		getAllJobs: getAllJobsQuery,
		getJob: getJobQuery,
		getCurrentUser: getCurrentUserQuery,
		getFilteredJobs: getFilteredJobsQuery,
	},
	Mutation: {
		register: registerMutation,
		login: loginMutation,
		createJob: createJobMutation,
		updateJob: updateJobMutation,
		deleteJob: deleteJobMutation,
	},
}

export default resolvers
