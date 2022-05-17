export const jobSelections = [0, 1, 2, 3] as const;
export type JobSelections = typeof jobSelections;
export type JobSelection = JobSelections[number];

export const outOfWorkStatus = [
	'looking for work',
	'work sabbatical',
	'homemaker',
	'waiting for the band to take off',
] as const;
export type OutOfWorkStatus = typeof outOfWorkStatus;
export type OutOfWorkState = OutOfWorkStatus[number];

export const occupations = [
	'advantage creating',
	'strategic support',
	'essential support',
	'non-essential',
] as const;
export type Occupations = typeof occupations;
export type Occupation = Occupations[number];
