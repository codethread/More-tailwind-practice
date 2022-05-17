import { render, RenderOptions } from '@testing-library/react';
import { Providers } from '../Providers';
import { ReactElement } from 'react';

interface Overrides {}

type Rendered = { view: ReturnType<typeof render> };

interface Options {
	renderOptions?: Omit<RenderOptions, 'queries'>;
	overrides?: Overrides;
}

function renderAsync(ui: ReactElement, options?: Options): Rendered {
	const { overrides, renderOptions } = options ?? {};

	const view = render(ui, {
		wrapper: ({ children }) => <Providers {...overrides}>{children}</Providers>,
		...renderOptions,
	});

	// await waitForElementToBeRemoved(() =>
	//   screen.queryByTestId("providers-loading")
	// );

	return { view };
}

export * from '@testing-library/react';
export { renderAsync as render, render as renderNoProviders };
