export interface Journey {
    _id: string;
    name: string;
    points?: JourneyPoint[]
}

export interface JourneyPoint {
    _id: string;
    name: string;
    location?: string;
}

export {}