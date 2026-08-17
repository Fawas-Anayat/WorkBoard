import React from 'react'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='flex flex-col'>
        <nav>navbar</nav>

        <div className='flex'>
            <aside>sidebar</aside>
            <main><Outlet/></main>
        </div>   
    </div>
  )
}

export default MainLayout;
