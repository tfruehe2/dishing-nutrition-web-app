import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { Footer } from './Footer'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'optional' })

    return (
        <div className="min-h-screen">
            <Navigation user={user} />

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

export default AppLayout
