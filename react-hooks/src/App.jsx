// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { StudentProvider, StudentProfile } from './StudentProfile';
const App = () => (
  <StudentProvider>
    <div>
      <StudentProfile />
    </div>
  </StudentProvider>
);

export default App;
