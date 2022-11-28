import React from "react";

export const FormErrorComponent = (props: {
    errorMessage: string
}) => {
    return (
    <div>
        <ul className="py-3 text-left text-sm text-red-400 font-bold capitalize">
            {props.errorMessage.split(',').map((error, index) => {
                return (
                    <li key={"form_error_"+index}>
                        {error}
                    </li>
                )
            })}
        </ul>
    </div>
    )
}