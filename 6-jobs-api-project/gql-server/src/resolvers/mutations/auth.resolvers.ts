import { GraphQLError } from "graphql"
import { comparePasswords, validateEmail } from "../../helpers/common"
import { TloginInput, TregisterInput, TregisterResponse } from "../../typeDefs"
import authModel from "../../model/authSchema"
import { createJWT } from "../../helpers/jwt"

export const registerMutation = async (
	parent: any,
	{ input }: { input: TregisterInput }
): Promise<TregisterResponse> => {
	try {
		const { name, email, password } = input
		let isValidEmail = validateEmail(email)
		if (!isValidEmail) throw new GraphQLError("invalid email")

		const user = await authModel.create({ name, email, password })
		const token = createJWT(user._id.toString(), user.username as string)
    
		return { name: user.username as string, token }
	} catch (error) {
		throw new GraphQLError(error as string)
	}
}

export const loginMutation = async (
	parent: any,
	{ input }: { input: TloginInput }
): Promise<TregisterResponse> => {
	try {
		const { email, password } = input
		let isValidEmail = validateEmail(email)
		if (!isValidEmail) throw new GraphQLError("invalid email!")

		const user = await authModel.findOne({ email })
		if (!user) throw new GraphQLError("user not found!")

		const isMatch = await comparePasswords(password, user.password as string)
		if (!isMatch) throw new GraphQLError("invalid password")

		const token = createJWT(user._id.toString(), user.username as string)
		return { token, name: user.username as string }
	} catch (error) {
		throw new GraphQLError(error as string)
	}
}
