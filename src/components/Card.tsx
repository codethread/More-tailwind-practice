import { IChildren } from '../Providers';

export function Card({ children, className }: IChildren & { className?: string }) {
	return (
		<section
			className={`flex flex-col gap-y-6 rounded-md border border-slate-300 p-4 pb-8 ${
				className ? className : ''
			}`}
		>
			{children}
		</section>
	);
}
