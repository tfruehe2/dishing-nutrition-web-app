import React from 'react';
import StickyBox from "react-sticky-box";

export const MultipartFormContainer = (props: { mainForm: React.ReactNode, sideForm: React.ReactNode, shadowClass?: string }) => {
    return (
    
        <div className="mt-8 mx-8 w-full flex">
            <div className="w-3/5 ">
                <div 
                    className={
                        props.shadowClass == null
                            ? 'bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow'
                            : 'bg-white py-8 px-4 sm:rounded-lg sm:px-10 ' + props.shadowClass
                    }
                >
                    {props.mainForm}
                </div>

            </div>

            <div className="w-2/5">
                <div 
                    className={
                        props.shadowClass == null
                            ? 'flex bg-white py-8 px-4 sm:rounded-lg sm:px-10 shadow'
                            : 'flex bg-white py-8 px-4 sm:rounded-lg sm:px-10 ' + props.shadowClass
                    }
                >
                    <div className='sticky'>
                        {props.sideForm}
                    </div>
                </div>
            </div>

        </div>
    );
};
