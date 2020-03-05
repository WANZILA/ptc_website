export interface IProgramme{
	id: number,
	programmeName: string,
	programme_data:string,
	programme_duration: string
}

export interface ProgrammeResolved{
	programme: IProgramme,
	error?:any
}