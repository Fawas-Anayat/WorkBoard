import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [sidebarOpen , setSidebarOpen] = useState(false)
  return (
    <div className='flex flex-col h-screen'>
        <Navbar onMenuClick = {()=>setSidebarOpen(true)}/>

        <div className='flex flex-1 w-full overflow-hidden'>
            <Sidebar isOpen = {sidebarOpen}
            onClose={()=>setSidebarOpen(false)} />
            <main className='flex-1 overflow-auto p-6'><Outlet/></main>
        </div>   
    </div>
  )
}

export default MainLayout;
