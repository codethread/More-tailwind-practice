import { IChildren } from '../Providers';

export function Page({ children }: IChildren) {
	return <div className="mx-auto mb-24 max-w-screen-lg">{children}</div>;
}
