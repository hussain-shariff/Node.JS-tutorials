export const getAllJobs = `#graphql
 type MonthlyApplications {
    date: String!
    count: Int!
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
  type getAllJobsResponse {
    count: Int!
    jobs: [Job!]!
    monthlyApplications: MonthlyApplications!
  }
  extend type Query {
    getAllJobs: getAllJobsResponse!
  }
`

export const getJob = `#graphql
  extend type Query {
    getJob(id: ID!): Job!
  }
`

export const createJob = `#graphql
  extend type Mutation {
    createJob(input: createJobInput!): Job!
  }
`

export const updateJob = `#graphql
  extend type Mutation {
    updateJob(id: ID!, input: createJobInput!): Job!
  }
`

export const deleteJob = `#graphql
  extend type Mutation {
    deleteJob(id: ID!): Job!
  }
`