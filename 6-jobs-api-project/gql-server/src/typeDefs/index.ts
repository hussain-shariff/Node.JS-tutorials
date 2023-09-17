import inputTypes from "../types/input.types"
import * as jobster from "../schema/jobster.schema"
import * as auth from "../schema/auth.schema"

const typeDefs = `#graphql
  # input types
  ${inputTypes}

  type Query 
  ${jobster.getAllJobs}

  type Mutation 
  ${auth.register}
  ${auth.login}
`
export default typeDefs
