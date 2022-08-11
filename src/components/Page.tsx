import { IChildren } from '../Providers';

export function Page({ children }: IChildren) {
	return <div className="mx-auto mt-8 mb-24 max-w-screen-lg">{children}</div>;
}
