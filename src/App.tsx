import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AcademyRibbon from './components/ui/AcademyRibbon'
import ScrollToTop from './components/ui/ScrollToTop'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-academy-navy bg-[#FAF7F2]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[76px] w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <AcademyRibbon repeats={4} className="h-3 rounded-none relative z-10" />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
