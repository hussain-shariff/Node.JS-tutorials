import bcrypt from "bcryptjs"

export const validateEmail = (email: string): boolean => {
	let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
	return emailRegex.test(email)
}
export const comparePasswords = async (
	candidatePassword: string,
	password: string
): Promise<boolean> => {
	return await bcrypt.compare(candidatePassword, password)
}
