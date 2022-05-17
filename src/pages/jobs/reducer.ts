import { merge } from '../../utils/merge';
import { JobSelection, Occupation, OutOfWorkState } from './info';
import { Dispatch } from 'react';

export interface Job {
	id: number;
	occupation?: Occupation;
	companyName?: string;
	income?: number;
}

export interface JobState {
	unemployed?: OutOfWorkState;
	jobs: Record<number, Job>;
	jobCount: JobSelection;
}

export const initialState: JobState = {
	jobs: {},
	jobCount: 0,
};

type Action =
	| { type: 'change job count'; data: JobSelection }
	| { type: 'update job info'; data: { job: Partial<Job>; number: number } }
	| { type: 'update unemployed info'; data: OutOfWorkState };

export type JobDispatch = Dispatch<Action>;

export const jobsPageReducer = (state: JobState, { type, data }: Action): JobState => {
	switch (type) {
		case 'change job count':
			return merge(state, { jobCount: data });
		case 'update job info':
			return merge(state, { jobs: { [data.number]: data.job } });
		case 'update unemployed info':
			return merge(state, { unemployed: data });
		default:
			return assertUnreachable(type);
	}
};

export function createEmptyJob(id: number): Job {
	return { id };
}

function assertUnreachable(branch: never): never {
	throw new Error(
		`This should not be reachable, likely there is a missing condition or switch case for branch ${
			branch as string
		}`
	);
}
