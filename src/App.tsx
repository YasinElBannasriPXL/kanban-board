import './App.css'
import SideBar from './components/common/SideBar'
import KanbanBoard from './components/kanban-board/KanbanBoard'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store';
import { useSelector, useDispatch } from 'react-redux'




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar />
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
