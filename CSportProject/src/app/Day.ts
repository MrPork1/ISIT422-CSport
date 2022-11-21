export interface Day {
    id: number,
    date: Date,
    utcDate: string,
    currentDay?: boolean,
    classIDsList?: string[],
    classIDsPast?: string[],
    classIDsAvailable?: string[]
}