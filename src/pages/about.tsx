import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const AboutPage = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    About
                </h2>
            }>

            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content="Learn more about RN Meg Hilbert and her gut health mission with Dishing Nutrition."
                />
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            This is the about page
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default AboutPage
