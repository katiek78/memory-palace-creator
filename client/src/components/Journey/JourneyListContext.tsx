import React, { useContext, useState } from "react";
import { Journey } from "../../types/Journey";

interface JourneyListInterface {
    journeys: Journey[],
    setJourneys: React.Dispatch<React.SetStateAction<Journey[]>>
}

const JourneyListContext = React.createContext<JourneyListInterface>({journeys: [{name: 'Test journey', points: []}], setJourneys: () => {}});

export function useJourneys() {
    return useContext(JourneyListContext)
  }

export default JourneyListContext;