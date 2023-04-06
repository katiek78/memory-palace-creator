import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import Create from '../Journey/Create';
import Error404 from '../Error/Error404';

const Router: React.FC = () =>     
        <Routes>
             <Route path="/" element={<MainLayout />}>
                 <Route index element={<Home />}></Route>
                 <Route path="/create" element={<Create />}></Route>                
                 <Route path="*" element={<Error404></Error404>} />
            </Route>
        </Routes>    

export default Router;