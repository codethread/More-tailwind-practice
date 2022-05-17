import { useEffect, useReducer } from 'react';
import { InputRadio, Card, Page } from '../components';
import { useStorage, useText } from '../hooks';
import { range } from '../utils/range';
import { jobSelections } from './jobs/info';
import { JobInfo } from './jobs/Job';
import { NoJobs } from './jobs/NoJob';
import { createEmptyJob, initialState, jobsPageReducer } from './jobs/reducer';

export function JobsPage() {
	const { jobs: text } = useText();

	const jobStorage = useStorage('jobInfo');
	const [state, dispatch] = useReducer(jobsPageReducer, jobStorage.get() ?? initialState);
	useEffect(() => {
		jobStorage.set(state);
	}, [state, jobStorage]);

	const { jobCount, jobs, unemployed } = state;
	return (
		<Page>
			<h1 className="sr-only">{text.h1}</h1>
			<header className="mb-8 rounded-md bg-gray-100 p-16">
				<h2 className="text-5xl">{text.header}</h2>
			</header>
			<main className="space-y-4">
				<Card>
					<InputRadio
						label={text.jobStatus.heading}
						items={jobSelections}
						selected={jobCount}
						onChange={(selected) => {
							dispatch({ type: 'change job count', data: selected });
						}}
					/>
				</Card>
				{jobCount === 0 ? (
					<NoJobs current={unemployed} dispatch={dispatch} />
				) : (
					range({ length: jobCount, startAt: 1 }).map((id) => (
						<JobInfo
							key={id}
							dispatch={dispatch}
							number={id}
							{...(jobs[id] ?? createEmptyJob(id))}
						/>
					))
				)}
				<DebugPanel clear={jobStorage.clear} />
			</main>
		</Page>
	);
}

function DebugPanel({ clear }: { clear(): void }) {
	return process.env.NODE_ENV !== 'development' ? null : (
		<Card className="border border-rose-500">
			<p className="text-lg text-rose-800">Debug only panel</p>
			<button
				className="input w-fit border border-rose-300 bg-rose-50 transition-colors hover:bg-rose-300 focus:ring focus:ring-pink-700"
				onClick={() => {
					clear();
					window.location.reload();
				}}
			>
				Clear data
			</button>
		</Card>
	);
}
