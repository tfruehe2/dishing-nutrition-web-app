import React from 'react';

export const StateSelect = (props: {
    value: string;
    onChange: (e: any) => void;
    disabled?: boolean;
    required?: boolean;
    editable?: boolean;
}) => {
    const states = [
        {
            name: 'Alabama',
            abbreviation: 'AL'
        },
        {
            name: 'Alaska',
            abbreviation: 'AK'
        },
        {
            name: 'Arizona',
            abbreviation: 'AZ'
        },
        {
            name: 'Arkansas',
            abbreviation: 'AR'
        },
        {
            name: 'California',
            abbreviation: 'CA'
        },
        {
            name: 'Colorado',
            abbreviation: 'CO'
        },
        {
            name: 'Connecticut',
            abbreviation: 'CT'
        },
        {
            name: 'Delaware',
            abbreviation: 'DE'
        },
        {
            name: 'District Of Columbia',
            abbreviation: 'DC'
        },
        {
            name: 'Florida',
            abbreviation: 'FL'
        },
        {
            name: 'Georgia',
            abbreviation: 'GA'
        },
        {
            name: 'Hawaii',
            abbreviation: 'HI'
        },
        {
            name: 'Idaho',
            abbreviation: 'ID'
        },
        {
            name: 'Illinois',
            abbreviation: 'IL'
        },
        {
            name: 'Indiana',
            abbreviation: 'IN'
        },
        {
            name: 'Iowa',
            abbreviation: 'IA'
        },
        {
            name: 'Kansas',
            abbreviation: 'KS'
        },
        {
            name: 'Kentucky',
            abbreviation: 'KY'
        },
        {
            name: 'Louisiana',
            abbreviation: 'LA'
        },
        {
            name: 'Maine',
            abbreviation: 'ME'
        },
        {
            name: 'Maryland',
            abbreviation: 'MD'
        },
        {
            name: 'Massachusetts',
            abbreviation: 'MA'
        },
        {
            name: 'Michigan',
            abbreviation: 'MI'
        },
        {
            name: 'Minnesota',
            abbreviation: 'MN'
        },
        {
            name: 'Mississippi',
            abbreviation: 'MS'
        },
        {
            name: 'Missouri',
            abbreviation: 'MO'
        },
        {
            name: 'Montana',
            abbreviation: 'MT'
        },
        {
            name: 'Nebraska',
            abbreviation: 'NE'
        },
        {
            name: 'Nevada',
            abbreviation: 'NV'
        },
        {
            name: 'New Hampshire',
            abbreviation: 'NH'
        },
        {
            name: 'New Jersey',
            abbreviation: 'NJ'
        },
        {
            name: 'New Mexico',
            abbreviation: 'NM'
        },
        {
            name: 'New York',
            abbreviation: 'NY'
        },
        {
            name: 'North Carolina',
            abbreviation: 'NC'
        },
        {
            name: 'North Dakota',
            abbreviation: 'ND'
        },
        {
            name: 'Ohio',
            abbreviation: 'OH'
        },
        {
            name: 'Oklahoma',
            abbreviation: 'OK'
        },
        {
            name: 'Oregon',
            abbreviation: 'OR'
        },
        {
            name: 'Pennsylvania',
            abbreviation: 'PA'
        },
        {
            name: 'Puerto Rico',
            abbreviation: 'PR'
        },
        {
            name: 'Rhode Island',
            abbreviation: 'RI'
        },
        {
            name: 'South Carolina',
            abbreviation: 'SC'
        },
        {
            name: 'South Dakota',
            abbreviation: 'SD'
        },
        {
            name: 'Tennessee',
            abbreviation: 'TN'
        },
        {
            name: 'Texas',
            abbreviation: 'TX'
        },
        {
            name: 'Utah',
            abbreviation: 'UT'
        },
        {
            name: 'Vermont',
            abbreviation: 'VT'
        },
        {
            name: 'Virginia',
            abbreviation: 'VA'
        },
        {
            name: 'Washington',
            abbreviation: 'WA'
        },
        {
            name: 'West Virginia',
            abbreviation: 'WV'
        },
        {
            name: 'Wisconsin',
            abbreviation: 'WI'
        },
        {
            name: 'Wyoming',
            abbreviation: 'WY'
        }
    ];

    return (
        <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
            </label>
            {props.editable ? (
                <select
                    id="state"
                    name="state"
                    onChange={(e) => {
                        props.onChange(e);
                    }}
                    autoComplete="state"
                    value={props.value}
                    required={props.required}
                    disabled={props.disabled}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md disabled:cursor-not-allowed"
                >
                    <option value="" disabled>
                        Select State
                    </option>

                    {states.map((state) => {
                        return (
                            <option key={state.abbreviation + '_option'} value={state.abbreviation}>
                                {state.name}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <p className="font-semibold text-gray-900">{props.value || 'N/A'}</p>
            )}
        </div>
    );
};
