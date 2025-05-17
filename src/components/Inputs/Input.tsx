import React from 'react';

const Input = ({value, onChange,label,placeholder,type}) => {
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>
            <div className="">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full outline-none placeholder:text-sm bg-gray-50 py-2 px-2"
                value={value}
                    onChange={(e) => onChange(e)}
                    required
            />
            </div>
        </div>
    );
};

export default Input;