import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import moment from 'moment/moment';
import React from 'react';
import DatePicker from 'react-datepicker';

export const Datepicker = (props: {
    editable: boolean;
    onChange: (e: any) => void;
    fieldName: string;
    fieldValue: Date;
    fieldLabel?: string;
    error?: string;
    className?: string;
    required?: boolean;
}) => {

    return (
        <div className={props.className}>
            <label
                htmlFor={props.fieldName}
                className="block text-sm font-medium text-gray-700 capitalize"
            >
                {props.fieldLabel || props.fieldName.replace('_', ' ')}
            </label>
            {props.editable === true ? (
                <DatePicker
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    selected={moment(props.fieldValue).toDate()}
                    onChange={(date) => {
                        let event = {
                            target: {
                                name: props.fieldName,
                                value: date
                            }
                        };
                        props.onChange(event);
                    }}
                    renderCustomHeader={({
                        date,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div className="flex w-full items-center justify-center px-2 py-2">
                            <div className="w-full flex justify-between space-x-2">
                                <button
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                    type="button"
                                    className={`
                                        ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                        inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                    `}
                                >
                                    <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                                </button>

                                <span className="text-lg text-gray-700">
                                    {moment(date).format('MMMM yyyy')}
                                </span>

                                <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                    type="button"
                                    className={`
                                        ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                                        inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                    `}
                                >
                                    <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    )}
                />
            ) : (
                <p className="font-semibold text-gray-900">{moment(props.fieldValue).format('MMMM Do YYYY') || 'N/A'}</p>
            )}
        </div>
    );
};
