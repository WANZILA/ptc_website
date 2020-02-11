export interface Programme{
	id: number,
	programme_name: string
}

export interface ProgrammeResolved{
	programme: Programme,
	error?:any
}