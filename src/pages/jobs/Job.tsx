import { useId } from 'react';
import { Card, FormItem, FormItemNumber, FormItemText } from '../../components';
import { useText } from '../../hooks';
import { InputSelectOccupation } from './Inputs';
import { Job, JobDispatch } from './reducer';

interface IJob extends Job {
	number: number;
	dispatch: JobDispatch;
}

export function JobInfo({ number, companyName, dispatch, occupation, income }: IJob) {
	const {
		jobs: { jobInput },
	} = useText();
	const occupationId = useId();
	return (
		<Card>
			<h3 className="text-xl">{jobInput.heading(number)}</h3>

			<FormItem label={jobInput.occupation} id={occupationId}>
				<InputSelectOccupation
					id={occupationId}
					onChange={(occupation) => {
						dispatch({
							type: 'update job info',
							data: { number, job: { occupation } },
						});
					}}
					value={occupation ?? 'none'}
				/>
			</FormItem>

			<FormItemText
				label={jobInput.companyName}
				input={{
					placeholder: jobInput.companyNamePlaceholder,
					value: companyName ?? '',
					onChange(name) {
						dispatch({
							type: 'update job info',
							data: { number, job: { companyName: name } },
						});
					},
				}}
			/>

			<FormItemNumber
				label={jobInput.income}
				input={{
					max: 1000000,
					min: 0,
					placeholder: jobInput.incomePlaceholder,
					value: income,
					onChange(pay) {
						dispatch({
							type: 'update job info',
							data: { number, job: { income: pay } },
						});
					},
				}}
			/>
		</Card>
	);
}
