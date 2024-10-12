import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './AdminPanel.jsx'

//Section 5: Conditional Rendering 
export default function Profile() {
    let isLoggedIn = true;
    return (
        <>
            {isLoggedIn && <AdminPanel />}
        </>
    );
}