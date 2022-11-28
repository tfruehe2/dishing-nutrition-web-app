import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { ArrowTopRightOnSquareIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const WorkWithMePage = () => {
    return (
        <AppLayout
            header={
                ""
            }>

            <Head>
                <title>Work With Me</title>
                <meta
                    name="description"
                    content="Learn more about RN Meg Hilbert and her gut health mission with Dishing Nutrition."
                />
            </Head>
            <div className="w-full bg-forestGreen ">
                <div className="relative px-12 py-24">
                    <div className="flex flex-wrap max-w-7xl mx-auto  bg-white overflow-hidden shadow-xl">
                    <div className="relative w-full h-56 sm:h-72 md:h-full md:w-1/2 sm:px-6 lg:px-12 py-24">
                        <p className="text-4xl font-bold">
                            Work With Me
                        </p>
                        <p className="pt-4">
                            My style combines a passion for merging research based nutrition recommendations along with focusing 
                            on our bodies intuitive needs -  we’ll find new ways to better health and wellness through food 
                            and intuitive investigation to promote lasting and lifelong change.
                            <br/>
                            <br/>
                            Together we can explore what a new path to good health and genuine wellbeing could look like for you
                            <br/>
                            <br/>
                            <strong>
                            Does this feel like the right time to work with me? 
                            </strong>
                            <br/>
                            <br/>
                            Schedule a 20 minute chat and we’ll explore if this partnership could be a good fit for the both of us! 
                        </p>
                        <a
                        href="/link"
                        className="bg-blush text-white inline-flex items-center justify-center rounded-full border border-transparent px-6 py-4 mt-8 font-medium hover:opacity-80"
                        >
                            Schedule Your Call Today
                        </a>
                    </div>

                    <div className="relative w-full md:w-1/2">
                        <img
                            className='absolute w-full h-full object-cover'
                            src="https://images.squarespace-cdn.com/content/v1/5f946a0907d18c347c094bae/1607884877985-8RYLQIEXK72EP9K27O0W/image-asset.jpeg?format=2500w"
                        >

                        </img>
                    </div>
                </div>
                </div>
            </div>
            <div>
                
            </div>
        </AppLayout>
    )
}

export default WorkWithMePage
