export interface IProgramme{
	 id:number,
	//programmeId: number,
	programmeName: string,
	// programmeImageUrl: string,	
	// programme_duration: string,
	// programme_tuition: string,
	// programme_description: string,
	// programme_objectives: string,
	// programme_outcomes: string,
}

export interface ProgrammeResolved{
	programme: IProgramme,
	error?:any
}