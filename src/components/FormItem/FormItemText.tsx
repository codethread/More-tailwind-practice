import { InputType } from '../shared';
import { FormItem, IFormItem } from './FormItem';

type IInputText = Omit<InputType, 'onChange' | 'type' | 'value'> &
	Required<Pick<InputType, 'id' | 'value'>> & { onChange(text: string): void };

interface IFormItemText extends IFormItem {
	input: Omit<IInputText, 'id'>;
}

export function FormItemText({ input, label, id: _id }: IFormItemText): JSX.Element {
	const id = _id ?? `${label}form-input`;
	return (
		<FormItem id={id} label={label}>
			<input
				{...input}
				className="input"
				onChange={({ target: { value: n } }) => {
					input.onChange(String(n));
				}}
				id={id}
			/>
		</FormItem>
	);
}
