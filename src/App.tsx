import './App.css'
import SideBar from './components/common/SideBar'
import KanbanBoard from './components/kanban-board/KanbanBoard'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <KanbanBoard />,
  },
  {
    path: "/board/:boardId",
    element: <KanbanBoard />,
  }
]);

function App() {
  return (
    <div className="App">
      <SideBar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
