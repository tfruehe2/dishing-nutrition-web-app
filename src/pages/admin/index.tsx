import React from 'react'
import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'


const AdminDashboard = () => {
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Admin Panel
                </h2>
            }>

            <Head>
                <title>Dishing Nutrition Admin Panel</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in! Admin
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard