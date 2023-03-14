import './App.css'

// import { HashRouter, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { AboutUs } from './pages/about_us/about-us-component'
import { ApplyNow } from './pages/appy-now/apply-now-page'
import { Committees } from './pages/committees/committees-component'
import { Contact } from './pages/contact/contact-component'
import { HomePage } from './pages/login/login'
import { OurTeam } from './pages/our-team/our-team-component'
import { Resources } from './pages/resources/resources-component'
import { Sponsors } from './pages/sponsors/sponsors-component'
import { Schedule } from './pages/schedule/schedule-coponent'
import { HomePage2 } from './pages/home/home-component'
import { QrCodeGeneratorTool } from './pages/qr-code-generator/qr-code-generator'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage2 />} />
          <Route path="/apply_now" element={<ApplyNow />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/qr_code" element={<QrCodeGeneratorTool />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/our_team" element={<OurTeam />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
