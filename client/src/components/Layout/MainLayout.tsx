import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Journey } from "../../types/Journey";
import JourneyListContext from "../Journey/JourneyListContext";

const MainLayout: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([{name: 'Test journey', points: [], _id: ''}]);

    return (
      <>
        <Header />
        <main>      
          <JourneyListContext.Provider value={{ journeys, setJourneys }}>
            <Outlet />         
          </JourneyListContext.Provider>   
        </main>
        <Footer />
      </>
    );
  };
  
export default MainLayout;
  
