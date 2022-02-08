import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Footer = React.lazy(() => import('../components/footer/Footer'))
const Navbar = React.lazy(() => import('../components/navbar/Navbar'))
const MinimalFooter = React.lazy(() => import('../components/footer/MinimalFooter'))
const MinimalFooterDashboard = React.lazy(() => import('../components/footer/MinimalFooterDashboard'))
const MinimalNavbar = React.lazy(() => import('../components/navbar/Minimal_Navbar'))
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy/Privacypolicy'))
const ScrollToTop = React.lazy(() => import('../components/scroll-to-top/ScrollToTop'))

const FAQs = React.lazy(() => import('../pages/FAQs/FAQs'))
const Home = React.lazy(() => import('../pages/home/Home'))
const About = React.lazy(() => import('../pages/about/About'))
const Login = React.lazy(() => import('../pages/login/Login'))
const NotFound = React.lazy(() => import('../pages/not-found/404'))
const Pricing = React.lazy(() => import('../pages/pricing/Pricing'))
const Contact = React.lazy(() => import('../pages/contactForm/Contact'))
const ForgotPassword = React.lazy(() => import('../pages/login/ForgotPassword'))
const ConfirmPassword = React.lazy(() => import('../pages/login/ConfirmPassword'))
const TermsAndConditions = React.lazy(() => import('../pages/TermsAndConditions/TermsAndConditions'))
const DashboardPortalFixed = React.lazy(() => import('../PortalDashboard/DashboardPortalPage/DashboardPortalFixed'))
const DashboardHeader = React.lazy(() => import('../PortalDashboard/DashboardHeader/DashboardHeader'))

function AppRoutes() {
  const location = useLocation()

  const { user, isAuthenticated } = useSelector(state => state.auth)

  return (
    <>
      <ScrollToTop />
      {['/app-faqs', '/app-privacy-policy', '/app-terms-of-service'].includes(location.pathname) ? (
        <MinimalNavbar />
      ) : ['/dashboard-portal'].includes(location.pathname) ? (
        <DashboardHeader />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/pricing' element={isAuthenticated && user ? <Navigate to='/' /> : <Pricing />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ConfirmPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms-of-service' element={<TermsAndConditions />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/contact-app' element={<Contact />} />
        <Route path='/app-faqs' element={<FAQs />} />
        <Route path='/app-privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/app-terms-of-service' element={<TermsAndConditions />} />
        <Route
          exact
          path='/dashboard-portal'
          element={isAuthenticated && user ? <DashboardPortalFixed /> : <Navigate to='/login' />}
        />
      </Routes>

      {['/dashboard-portal'].includes(location.pathname) ? (
        <MinimalFooterDashboard />
      ) : ['/login', '/register'].includes(location.pathname) ? (
        <MinimalFooter />
      ) : ['/app-faqs', '/app-privacy-policy', '/app-terms-of-service'].includes(location.pathname) ? (
        ''
      ) : (
        <Footer />
      )}
    </>
  )
}
export default AppRoutes
