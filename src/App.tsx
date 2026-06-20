/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

// Pages placeholders
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import Authentication from './pages/Authentication';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
