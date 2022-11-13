export interface Day {
    id: number,
    date: Date,
    currentDay?: boolean,
    classIDsList?: string[],
    classIDsPast?: string[]
}