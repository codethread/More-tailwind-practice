import { range } from './range';

describe('range', () => {
	type Test = {
		args: Parameters<typeof range>[0];
		res: number[];
	};
	const tests: Test[] = [
		{ args: { length: 0 }, res: [] },
		{ args: { length: 0, startAt: 0 }, res: [] },
		{ args: { length: 0, startAt: 1 }, res: [] },
		{ args: { length: 5 }, res: [0, 1, 2, 3, 4] },
		{ args: { length: 1, startAt: 1 }, res: [1] },
		{ args: { length: 5, startAt: 0 }, res: [0, 1, 2, 3, 4] },
		{ args: { length: 5, startAt: 1 }, res: [1, 2, 3, 4, 5] },
	];

	test.each(tests)('for $args returns $res', ({ args, res }) => {
		expect(range(args)).toEqual(res);
	});
});
