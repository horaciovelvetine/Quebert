export interface CurrentCronfigResInt {
	message: string;
	payload: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		runImmediately: boolean;
	};
}
