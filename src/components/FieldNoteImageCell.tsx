import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { FieldNoteImage } from '../stores/FarmStore';
import { rootStore } from '../stores/RootStore';

export const FieldNoteImageCell = (props: {
    fieldNoteImage: FieldNoteImage;
    clickHandler?: (image: FieldNoteImage) => void;
    deleteHandler?: (id: number) => void;
}) => {
    let { farmStore } = rootStore();
    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg bg-white group sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            {props.deleteHandler && (
                <div className="z-10 top-0 right-2 absolute hidden group-hover:inline-flex">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault()
                            if (props.deleteHandler) {
                                props.deleteHandler!(props.fieldNoteImage.id!);
                            }
                        }}
                    >
                        <TrashIcon className="h-8 w-8 text-red-600" />
                    </button>
                </div>
            )}

            <img
                src={props.fieldNoteImage.image}
                onClick={() => {
                    if (props.clickHandler) {
                        props.clickHandler(props.fieldNoteImage);
                    }
                }}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
    );
};
