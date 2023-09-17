import { ObjectId } from "mongoose"

const typeDefs = `#graphql
  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  type RegisterResponse {
    name: String!
    token: String!
  }

  type Job {
    _id: ID
    company: String
    createdAt: String
    createdBy: String
    jobType: String
    location: String
    position: String
    status: String
    updatedAt: String
  }
  type MonthlyApplications {
    date: String!
    count: Int!
  }
  type getAllJobsResponse {
    count: Int!
    jobs: [Job!]!
    monthlyApplications: MonthlyApplications!
  }

  type Query {
    getAllJobs: getAllJobsResponse!
  }

  type Mutation {
    register(input: RegisterInput!): RegisterResponse!
    login(input: LoginInput!): RegisterResponse!
  }
`
export type TregisterInput = {
	name: string
	email: string
	password: string
}

export type TregisterResponse = {
	name: string
	token: string
}

export type TloginInput = {
	email: string
	password: string
}

export type Tjob = {
	_id: ObjectId
	company?: string
	createdAt?: NativeDate
	createdBy?: string
	jobType?: string
	location?: string
	position?: string
	status?: string
	updatedAt?: string
}

type TmonthlyApplications = {
	date: string
	count: number
}

export type TgetAllJobsResponse = {
	count: number
	jobs: Array<Tjob>
	monthlyApplications: TmonthlyApplications
}

export default typeDefs
