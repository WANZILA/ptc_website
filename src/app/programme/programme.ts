export interface Programme{
	id: number,
	programme: string
}

export interface ProgrammeResolved{
	programme: Programme,
	error?:any
}