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
