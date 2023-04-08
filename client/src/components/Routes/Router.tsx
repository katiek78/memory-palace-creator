import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import Create from '../Journey/Create';
import CreatePoint from '../Journey/CreatePoint';
import Edit from '../Journey/Edit';
import EditPoint from '../Journey/EditPoint';
import View from '../Journey/View';
import Error404 from '../Error/Error404';

const Router: React.FC = () =>     
        <Routes>
             <Route path="/" element={<MainLayout />}>
                 <Route index element={<Home />}></Route>
                 <Route path="/create" element={<Create />}></Route>                
                 <Route path="/edit/:id" element={<Edit />}></Route>      
                 <Route path="/view/:id" element={<View />}></Route>      
                 <Route path="/createPoint/:id" element={<CreatePoint />}></Route>
                 <Route path="/edit-point/:id" element={<EditPoint />}></Route>
                 <Route path="*" element={<Error404></Error404>} />
            </Route>
        </Routes>    

export default Router;