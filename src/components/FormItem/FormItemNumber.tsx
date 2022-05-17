import { IInputNumber, InputNumber } from '../Inputs/InputNumber';
import { FormItem, IFormItem } from './FormItem';

interface IFormItemNumber extends IFormItem {
	input: Omit<IInputNumber, 'id'>;
}

export function FormItemNumber({ id: _id, input, label }: IFormItemNumber): JSX.Element {
	const id = _id ?? `${label}form-input`;
	return (
		<FormItem id={id} label={label}>
			<InputNumber {...input} id={id} />
		</FormItem>
	);
}
