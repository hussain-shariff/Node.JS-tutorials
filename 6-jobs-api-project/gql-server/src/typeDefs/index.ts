import inputTypes from "../types/input.types"
import * as jobster from "../schema/jobster.schema"
import * as auth from "../schema/auth.schema"

const typeDefs = `#graphql
  # input types
  ${inputTypes}

  type Query 
  ${jobster.getAllJobs}
  ${jobster.getJob}
  ${jobster.getCurrentUser}
  ${jobster.getFilteredJobs}

  type Mutation 
  ${auth.register}
  ${auth.login}
  ${jobster.createJob}
  ${jobster.updateJob}
  ${jobster.deleteJob}
  ${jobster.updateUser}
`
export default typeDefs
