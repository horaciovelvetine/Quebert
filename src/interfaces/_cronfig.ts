// Used to set interval timing for Toad Scheduler jobs
// reference: https://github.com/kibertoad/toad-scheduler

export interface CRONFIG {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	runImmediately: boolean;
}

export const defaultCronfig: CRONFIG = {
	days: 0,
	hours: 0,
	minutes: 15,
	seconds: 0,
	runImmediately: true,
};
