export interface Journey {
    name: string;
    points: JourneyPoint[]
}

export interface JourneyPoint {
    name: string;
    location?: string;
}

export {}