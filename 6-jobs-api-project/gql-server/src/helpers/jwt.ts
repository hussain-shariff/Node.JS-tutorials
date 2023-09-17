import jwt from "jsonwebtoken"

export const createJWT = (userID: string, name: string) => {
	return jwt.sign({ userID, name }, process.env.JWT_SECRET as string, {
		expiresIn: process.env.JWT_LIFETIME,
	})
}
