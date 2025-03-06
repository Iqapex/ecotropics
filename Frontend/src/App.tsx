// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import WhatWeDo from './pages/WhatWeDo';
// import AboutUs from './pages/AboutUs';
// import GetInvolved from './pages/GetInvolved';
// import Membership from './pages/Membership';
// import AdminDashboard from './pages/admin/Dashboard';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="what-we-do/*" element={<WhatWeDo />} />
//             <Route path="about-us/*" element={<AboutUs />} />
//             {/* <Route path="get-involved/*" element={<GetInvolved />} />
//             <Route path="membership/*" element={<Membership />} /> */}
//           </Route>
//           {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}
//         </Routes>
//       </Router>
//     </QueryClientProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PageTransition from './components/PageTransition';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import GetInvolved from './pages/GetInvolved';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />

        {/* About Page & Subpages */}
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <AboutUs />
            </PageTransition>
          }
        >
          <Route path="our-people" element={<AboutUs />} />
          <Route path="our-history" element={<AboutUs />} />
          <Route path="where-we-work" element={<AboutUs />} />
        </Route>

        {/* What We Do Page & Subpages */}
        <Route 
          path="/what-we-do" 
          element={
            <PageTransition>
              <WhatWeDo />
            </PageTransition>
          }
        >
          <Route path="nature-based-solutions" element={<WhatWeDo />} />
          <Route path="redd" element={<WhatWeDo />} />
          <Route path="arr" element={<WhatWeDo />} />
          <Route path="biochar" element={<WhatWeDo />} />
          <Route path="renewable-energy" element={<WhatWeDo />} />
          <Route path="cookstoves" element={<WhatWeDo />} />
          <Route path="constructed-wetlands" element={<WhatWeDo />} />
        </Route>

        {/* Get Involved Page & Subpages */}
        <Route 
          path="/get-involved" 
          element={
            <PageTransition>
              <GetInvolved />
            </PageTransition>
          }
        >
          <Route path="volunteer" element={<GetInvolved />} />
          <Route path="careers" element={<GetInvolved />} />
          <Route path="wcsf" element={<GetInvolved />} />
          <Route path="news" element={<GetInvolved />} />
        </Route>

        {/* Membership & Giving Page */}
        <Route 
          path="/membership" 
          element={
            <PageTransition>
              <Membership />
            </PageTransition>
          }
        >
          <Route path="donate-now" element={<Membership />} />
          <Route path="give-monthly" element={<Membership />} />
          <Route path="gift-estate-planning" element={<Membership />} />
        </Route>

        {/* Contact Page */}
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />

        {/* Redirects */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;