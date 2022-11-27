import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import KanbanBoard from './components/kanban-board/KanbanBoard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/board/:boardId",
        element: <KanbanBoard />,
      }]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
