import { TextProvider } from './hooks/useText';
import { ReactNode } from 'react';

export interface IChildren {
	children: ReactNode;
}

export function Providers({ children }: IChildren) {
	return <TextProvider>{children}</TextProvider>;
}
