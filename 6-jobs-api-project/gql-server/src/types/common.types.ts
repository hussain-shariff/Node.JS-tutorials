import { ObjectId } from "mongoose"

export type TregisterInput = {
	name: string
	email: string
	password: string
}

export type TregisterResponse = {
	name: string
	token: string
}

export type TloginInput = {
	email: string
	password: string
}

export type Tjob = {
	_id: ObjectId
	company?: string
	createdAt?: NativeDate
	createdBy?: string
	jobType?: string
	location?: string
	position?: string
	status?: string
	updatedAt?: string
}

type TmonthlyApplications = {
	date: string
	count: number
}

export type TgetAllJobsResponse = {
	count: number
	jobs: Array<Tjob>
	monthlyApplications: TmonthlyApplications
}
