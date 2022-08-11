import { useId } from 'react';
import { Card, FormItem, InputSelectFactory } from '../../components';
import { useText } from '../../hooks';
import { OutOfWorkState, outOfWorkStatus } from './info';
import { JobDispatch } from './reducer';

export const InputSelectUnemployed = InputSelectFactory(outOfWorkStatus);

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
