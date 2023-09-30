import React from 'react'

export default function InputField({ for_name, labelClassName, type, idInput, placeholder, inputClassName }) {
    return (
        <React.Fragment>
            <label
                className={labelClassName}
                for={for_name}
            >
                الاسم
            </label>
            <input
                type={type}
                id={idInput}
                name={for_name}
                placeholder={placeholder}
                className={inputClassName}
            />
        </React.Fragment>
    )
}
