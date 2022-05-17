import { useId } from 'react';

export function InputRadio<A extends readonly (string | number)[]>({
	items,
	label,
	onChange,
	selected,
	disabled,
}: {
	label: string;
	items: A;
	selected: A[number];
	onChange(selection: A[number]): void;
	disabled?: boolean;
}) {
	return (
		<fieldset disabled={disabled} name="buttons-radio" className="flex flex-row text-center">
			<legend className="mb-2 text-left font-bold">{label}</legend>
			<div className="flex overflow-hidden rounded-md border border-gray-400">
				{items.map((i, idx) => (
					<Item
						key={i}
						label={i}
						checked={selected === i}
						setChecked={onChange}
						last={idx === items.length - 1}
					/>
				))}
			</div>
		</fieldset>
	);
}

function Item<A extends string | number>({
	label,
	setChecked,
	checked,
	last,
}: {
	label: A;
	checked: boolean;
	setChecked(n: A): void;
	last: boolean;
}) {
	const id = label + useId();
	return (
		<div
			key={label}
			className={`grid ${last ? '' : 'border-r border-gray-400'}`}
			style={{
				gridTemplateAreas: 'box',
			}}
		>
			<input
				id={id}
				type="radio"
				name="buttons-radio"
				className="cursor-pointer appearance-none transition-colors checked:bg-blue-300  disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 disabled:checked:bg-blue-100"
				checked={checked}
				onChange={() => {
					setChecked(label);
				}}
				style={{
					gridArea: 'box',
				}}
			/>
			<label
				style={{
					gridArea: 'box',
				}}
				key={label}
				htmlFor={id}
				className="pointer-events-none py-2 px-4"
			>
				{label}
			</label>
		</div>
	);
}
