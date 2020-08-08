export interface IProgramme{
	 id:number,
	//programmeId: number,
	programmeName: string,
	programmeImageUrl: string,	
    programme_duration: string,
    programme_tuition: string,
	programme_description: string[],
	programme_objectives: string[],
	programme_outcomes: string[],
	programme_distance_learning: string
}

export interface ProgrammeResolved{
	programme: IProgramme,
	error?:any
}

export interface IUpdates{
	id:number,
	EventDate: string[],
	EventDetail: string[],
}