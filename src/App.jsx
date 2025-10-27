import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/home/HeroSection'
import WelcomeSection from './pages/home/WelcomeSection'
import Product from './pages/home/Product'
import Craft from './pages/home/Crafts'
import Footer from './components/Footer'
import Gallery from './pages/home/Gallery'
import Testimonals from './pages/home/Testimonals'
import BluKingsCocktails from './pages/home/Cocktails'
import About from './pages/about/About'
import OurTeam from './pages/about/OurTeam'
import Contact from './pages/contact/Contact'
import MissionVisionCards from './pages/about/Mission'
import WhyChooseUs from './pages/about/WhyChooseUs'
import FAQ from './pages/contact/FAQ'
import Founder from './pages/about/Founder'
import Beer from './pages/products/beer/Beer'
// import Galleryy from './pages/gallery/Gallery'
import PhotoStudioWebsite from './pages/gallery/Gallery'
import Vodka from './pages/products/vodka/vodka'
import OldAndGold from './pages/products/old-and-bold-whisky/old-and-bold-whisky'
import BluKinsProducts from './pages/products/blu-kings-whisky/blu-kings-whisky'
import BlackAndBlack from './pages/products/black-and-black/black-and-black'
import Cocktails from './pages/cocktails/Cocktails'
import Crafts from './pages/crafts/Crafts'
import TermsAndConditions from './pages/terms&conditions/TermsAndConditions'
import PrivacyPolicy from './pages/privacy-and-policy/Privacy-and-Policy'
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog/BlogDetail'
import AgeVerificationPopup from './components/Popup'

function App() {
  // Initialize state by checking localStorage immediately
  // This prevents the flash/disappearance issue
  const [showAgeVerification, setShowAgeVerification] = useState(() => {
    try {
      const ageVerified = localStorage.getItem('ageVerified');
      console.log('Initial age verification check:', ageVerified);
      // Show popup if NOT verified (null, undefined, or anything other than 'true')
      const shouldShow = ageVerified !== 'true';
      console.log('Should show popup:', shouldShow);
      return shouldShow;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      // Default to showing popup if there's an error
      return true;
    }
  });

  // Debug logging
  useEffect(() => {
    console.log('Current age verification status:', showAgeVerification);
    console.log('LocalStorage value:', localStorage.getItem('ageVerified'));
  }, [showAgeVerification]);

  return (
  <>
  <Router>
    {/* If age verification is required, show the popup and block all content */}
    {showAgeVerification ? (
      <AgeVerificationPopup 
        onVerified={() => {
          console.log('onVerified called, hiding popup');
          setShowAgeVerification(false);
        }} 
      />
    ) : (
      <>
        <Navbar />
        <Routes>
      <Route path="/" element={<div>
       
        <HeroSection />
        <WelcomeSection />
        <Product />
        <Craft/>
        <Gallery />
        <BluKingsCocktails />
        <Testimonals />
          
      </div>} />
      <Route path="/about" element={
        <div>
        <About />
        <MissionVisionCards />
        <WhyChooseUs/>
        <Founder/>
        <OurTeam />
      </div>} />
      <Route path="/contact" element={
        <div>
        <Contact />
        <FAQ/>
        </div>} />
           <Route path="/products/beers" element={
        <div>
       <Beer/>
    
   
        </div>} />
            <Route path="/products/blukings-vodka" element={
        <div>
       <Vodka/>
    
   
        </div>} />
            <Route path="/products/old-and-bold-whisky" element={
        <div>
       <OldAndGold/>
    
   
        </div>} />
        <Route path="/products/black-and-black-whisky" element={
        <div>
       <BlackAndBlack/>
    
   
        </div>} />
         <Route path="/products/blu-kings-whisky" element={
        <div>
       
    <BluKinsProducts/>
   
        </div>} />
       
         <Route path="/gallery" element={<PhotoStudioWebsite/>}/>
         <Route path='/cocktails' element={<Cocktails/>}/>
        <Route path='/craft' element={<Crafts/>}/>
       
           <Route path='/terms-and-coditions' element={<TermsAndConditions/>}/>
              <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
              <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

      
        </Routes>
        <Footer />
      </>
    )}
  </Router>

  </>
  )
}

export default App