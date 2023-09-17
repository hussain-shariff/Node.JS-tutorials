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

export default `#graphql
  ${RegisterInput}
  ${LoginInput}
`
