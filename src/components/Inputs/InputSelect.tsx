import { forwardRef } from 'react';

export interface IInputSelect<A> {
	id: string;
	readonly value: A | 'none';
	onChange(n: A): void;
}

export const InputSelectFactory = <A extends string>(options: readonly A[]) =>
	forwardRef<HTMLSelectElement, IInputSelect<A>>(({ id, value, onChange }, ref) => {
		return (
			<select
				ref={ref}
				className={`input w-full ${value === 'none' ? 'text-gray-400' : ''} `}
				id={id}
				value={value}
				onChange={({ target }) => {
					const v = target.value as unknown as A;
					onChange(v);
				}}
			>
				{value === 'none' && (
					<option disabled value="none" className="hidden text-gray-900">
						{' '}
						-- select an option --{' '}
					</option>
				)}
				{options.map((option) => (
					<option key={option} value={option} className="">
						{option}
					</option>
				))}
			</select>
		);
	});
