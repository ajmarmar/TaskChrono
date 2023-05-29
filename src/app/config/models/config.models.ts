
export class RangeHour {
    public from: string = '03:00';
    public to: string = '19:00';
}

export class DayWork {
    public day: string = '';
    public enable: boolean = false;
    public range: RangeHour[] = [new RangeHour()];

    constructor(day: string) {
        this.day = day;
    }
}

export class Config {
    public _id?: string;
    public enableScheduler: boolean = false;
    public week: DayWork[] = [];

    constructor() {
        this.week.push(new DayWork('Monday'));
        this.week.push(new DayWork('Tuesday'));
        this.week.push(new DayWork('Wednesday'));
        this.week.push(new DayWork('Thursday'));
        this.week.push(new DayWork('Friday'));
        this.week.push(new DayWork('Saturday'));
        this.week.push(new DayWork('Sunday'));
    }
}
