import { JobState } from '../pages/jobs/reducer';

type StorageMap = {
	jobInfo?: JobState;
};

type StorageKey = keyof StorageMap;

interface UseStorage<A extends StorageKey> {
	get(): StorageMap[A];
	set(value: StorageMap[A]): void;
	clear(): void;
}

export function useStorage<Key extends StorageKey>(key: Key): UseStorage<Key> {
	return {
		get() {
			const item = localStorage.getItem(key);
			if (!item) return;
			try {
				return JSON.parse(item);
			} catch (_) {
				console.warn(`key "${key}" had malformed JSON. Value was deleted with value of\n"${item}"`);
				localStorage.removeItem(key);
				return;
			}
		},
		set(value) {
			localStorage.setItem(key, JSON.stringify(value));
		},
		clear() {
			localStorage.removeItem(key);
		},
	};
}
