import { Class } from "./Classes";

export interface Day {
    id: number,
    date: Date,
    utcDate: string,
    currentDay?: boolean,
    classIDsList?: Class[],
    classIDsPast?: Class[],
    classIDsAvailable?: Class[]
}