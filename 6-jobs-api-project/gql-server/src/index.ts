import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import connectDB from "./db/connect"
import dotenv from "dotenv"
dotenv.config()
import resolvers from "./resolvers"
import typeDefs from "./typeDefs"
import { getContext } from "./helpers/context"

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
})

const port = Number(process.env.PORT) || 5000

async function main() {
	try {
		connectDB(process.env.MONGO_URI || "")
		const { url } = await startStandaloneServer(server, {
			listen: { port },
			context: getContext,
		})
		console.log(`🚀  Server ready at: ${url}`)
	} catch (error) {
		console.log(error)
	}
}

main()
