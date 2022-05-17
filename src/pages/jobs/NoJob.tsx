import { useId } from 'react';
import { Card, FormItem } from '../../components';
import { useText } from '../../hooks';
import { OutOfWorkState } from './info';
import { InputSelectUnemployed } from './Inputs';
import { JobDispatch } from './reducer';

export function NoJobs({ dispatch, current }: { dispatch: JobDispatch; current?: OutOfWorkState }) {
	const {
		jobs: {
			noJob: { heading },
		},
	} = useText();
	const occupationId = useId();
	return (
		<Card>
			<FormItem label={heading} id={occupationId}>
				<InputSelectUnemployed
					id={occupationId}
					onChange={(occupation) => {
						dispatch({ type: 'update unemployed info', data: occupation });
					}}
					value={current ?? 'none'}
				/>
			</FormItem>
		</Card>
	);
}
