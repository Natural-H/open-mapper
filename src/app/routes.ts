import { createBrowserRouter } from 'react-router'
import Home from './components/Home'
import ProgramDetail from './components/ProgramDetail'
import Tutorials from './components/Tutorials'
import ScoopGuide from './components/ScoopGuide'
import NotFound from './components/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/program/:id',
    Component: ProgramDetail
  },
  {
    path: '/program/:id/tutorials',
    Component: Tutorials
  },
  {
    path: '/scoop-guide',
    Component: ScoopGuide
  },
  {
    path: '*',
    Component: NotFound
  }
])
