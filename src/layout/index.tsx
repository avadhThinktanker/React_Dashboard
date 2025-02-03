import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col md:flex-row'>
                <Sidebar />
                <main className='flex-1'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout