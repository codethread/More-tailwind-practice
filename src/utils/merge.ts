import mergeOG from 'lodash.merge';

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export function merge<A extends object>(obj: A, ...args: DeepPartial<A>[]): A {
	return mergeOG({}, obj, ...args);
}
