import { loginMutation, registerMutation } from "./mutations/auth.resolvers"
import { getAllJobsQuery } from "./queries/jobs.queries"

const resolvers = {
	Query: {
		getAllJobs: getAllJobsQuery,
	},
	Mutation: {
		register: registerMutation,
		login: loginMutation,
	},
}

export default resolvers
