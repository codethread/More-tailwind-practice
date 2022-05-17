import { InputType } from '../shared';

export type IInputNumber = Omit<InputType, 'onChange' | 'type'> &
	Required<Pick<InputType, 'id' | 'max' | 'min'>> & {
		onChange(n: number): void;
	};

export function InputNumber({
	min,
	max,
	id,
	value,
	onChange,
	...props
}: IInputNumber): JSX.Element {
	return (
		<input
			className="input w-full"
			id={id}
			type="number"
			min={min}
			max={max}
			value={value ?? ''}
			onChange={({ target: { value: n } }) => {
				onChange(Number(n));
			}}
			{...props}
		/>
	);
}
