const RegisterInput = `#graphql
	input RegisterInput {
		name: String!
		email: String!
		password: String!
}`

const LoginInput = `#graphql
    input LoginInput {
    email: String!
    password: String!
  }`

const createJobInput = `#graphql
  input createJobInput {
    company: String
    jobType: String
    location: String
    position: String
    status: String
  }
`

export default `#graphql
  ${RegisterInput}
  ${LoginInput}
  ${createJobInput}
`
