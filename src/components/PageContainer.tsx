import React from 'react';
// import { Alert as AlertInterface } from '../stores/RootStore';
import { Alert } from './Alert';

export const PageContainer = (props: {
        children: React.ReactNode;
        // alert?: AlertInterface | null;
        // setAlert?: (alert: AlertInterface | null) => void;
    }) => {
        return (
            <div className="h-full w-full bg-gray-50">
                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    {/* {props.alert && (
                        <Alert
                            message={props.alert.message}
                            kind={props.alert.type || 'success'}
                            callback={() => {
                                if (props.setAlert) {
                                    props.setAlert(null);
                                }
                            }}
                        />
                    )} */}
                    {props.children}
                </div>
            </div>
        );
    };
