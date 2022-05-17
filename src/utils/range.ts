export function range({ length, startAt = 0 }: { length: number; startAt?: number }): number[] {
	return Array(length)
		.fill(null)
		.map((_, i) => i + startAt);
}
