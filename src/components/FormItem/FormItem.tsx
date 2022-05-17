import { IChildren } from '../../Providers';

export interface IFormItem {
	id?: string;
	label: string;
	ariaLabel?: string;
}

export function FormItem({
	id: _id,
	label,
	children,
	ariaLabel,
}: IChildren & IFormItem): JSX.Element {
	const id = _id ?? `${label}form-input`;
	return (
		<div className="flex w-full flex-col gap-2">
			<label htmlFor={id} aria-label={ariaLabel} className="font-bold">
				{label}
			</label>
			{children}
		</div>
	);
}
