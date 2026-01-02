import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import BlogsPage from './pages/Blogs'
import BlogDetailPage from './pages/BlogDetail'
import SnippetsPage from './pages/Snippets'
import AboutPage from './pages/About'

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="/blogs"
            element={
              <PageTransition>
                <BlogsPage />
              </PageTransition>
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <PageTransition>
                <BlogDetailPage />
              </PageTransition>
            }
          />
          <Route
            path="/snippets"
            element={
              <PageTransition>
                <SnippetsPage />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return <AppRoutes />
}
