import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export interface PaginationProps {
    sourceDataCallback: (url: string) => void;
    from: number;
    to: number;
    total: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

export const PaginationFooter = (props: { pagination: PaginationProps }) => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{props.pagination.from}</span> to{' '}
                        <span className="font-medium">{props.pagination.to}</span> of{' '}
                        <span className="font-medium">{props.pagination.total}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex space-x-2 rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {props.pagination.links.length &&
                            props.pagination.links.map((link, index) => {
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={(e) => {
                                            if (link.url) {
                                                let url = link.url.replace(
                                                    window.location.origin + '/api/v1/',
                                                    ''
                                                );
                                                props.pagination.sourceDataCallback(url);
                                            }
                                        }}
                                        className={
                                            link.active
                                                ? 'px-2 z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                                : ' px-2 bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        }
                                    >
                                        {link.label
                                            .replace('pagination.previous', '◄ Previous')
                                            .replace('pagination.next', 'Next ►')}
                                    </button>
                                );
                            })}
                    </nav>
                </div>
            </div>
        </div>
    );
};
