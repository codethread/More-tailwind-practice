import { createContext, useContext } from 'react';
import { IChildren } from '../Providers';

export const text = {
	jobs: {
		h1: 'Welcome to the jobs page',
		header: 'Test App',
		jobStatus: {
			heading: 'How many jobs do you have?',
		},
		noJob: {
			heading: 'What is your current status?',
		},
		jobInput: {
			heading: (jobNumber: number) => `Job ${jobNumber}`,
			occupation: 'What is your occupation?',
			companyName: 'Company Name',
			companyNamePlaceholder: 'Enter company name',
			income: 'Income',
			incomePlaceholder: 'Enter amount',
		},
	},
} as const;

type Text = typeof text;

const textContext = createContext<null | Text>(null);

export function useText() {
	const context = useContext(textContext);
	if (!context) throw new Error('useText was used without provider');

	return text;
}

export function TextProvider({ children }: IChildren): JSX.Element | null {
	return <textContext.Provider value={text}>{children}</textContext.Provider>;
}
