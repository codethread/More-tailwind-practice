import { renderHook } from '@testing-library/react-hooks';
import { useText, TextProvider, text } from './useText';
import { IChildren } from '../Providers';

describe('useText', () => {
	it('should throw an error when used without a Provider', () => {
		const { result } = renderHook(() => useText());

		expect(result.error).toMatchInlineSnapshot(`[Error: useText was used without provider]`);
	});

	it('should provide text when used with a provider', () => {
		const { result } = renderHook(() => useText(), {
			wrapper: ({ children }: IChildren) => <TextProvider>{children}</TextProvider>,
		});

		expect(result.current).toBe(text);
	});
});
