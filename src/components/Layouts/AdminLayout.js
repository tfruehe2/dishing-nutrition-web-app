import { useAuth } from '@/hooks/auth'
import AdminNavigation from './AdminNavigation'
import { Footer } from './Footer'

const AdminLayout = ({ header, children}) => {
    const { user } = useAuth({ middleware: 'auth' })
    
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavigation user={user} />

            {/* Page Heading */}
            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header> */}

            {/* Page Content */}
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default AdminLayout
