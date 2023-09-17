export const register = `#graphql
  type RegisterResponse {
    name: String!
    token: String!
  }
  extend type Mutation {
    register(input: RegisterInput!): RegisterResponse!
  }
`

export const login = `#graphql
  extend type Mutation {
    login(input: LoginInput!): RegisterResponse!
  }
`
