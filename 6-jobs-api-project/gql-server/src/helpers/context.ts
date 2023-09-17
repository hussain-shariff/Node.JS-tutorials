import { IncomingMessage } from "http"
import { GraphQLError } from "graphql"
import jwt from "jsonwebtoken"

export type Tcontext = {
	userID: string
	name: string
}

const verifyToken = (req: IncomingMessage) => {
	const authHeader = req.headers.authorization
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new GraphQLError("not authorized!", {
			extensions: { code: "UNAUTHENTICATED" },
		})
	} else {
		try {
			const token = authHeader.split(" ")[1]
			const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
			const { userID, name } = decoded as Tcontext
			return { userID, name }
		} catch (error) {
			throw new GraphQLError("not authorized!", {
				extensions: { code: "UNAUTHENTICATED" },
			})
		}
	}
}

const getContext = async ({
	req,
}: {
	req: IncomingMessage
}): Promise<Tcontext> => {
	return verifyToken(req)
}

export { getContext, verifyToken }
