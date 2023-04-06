export interface Journey {
    _id: string;
    name: string;
    points: JourneyPoint[]
}

export interface JourneyPoint {
    name: string;
    location?: string;
}

export {}