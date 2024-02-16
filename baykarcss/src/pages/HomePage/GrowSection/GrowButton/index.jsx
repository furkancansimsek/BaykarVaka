import React from 'react';

const GrowButton = ({
                        icon,
                        children
                    }) => {
    return (
            <span className="flex justify-center md:justify-start cursor-pointer gap-4 font-medium text-xl items-center hover:bg-white p-4 transition-all rounded-lg hover:shadow-lg group">
                <img src={icon} alt="BUTTONICON"/>
                <span className="whitespace-nowrap">{children}</span>
                <img className="hidden md:block opacity-0 transition group-hover:md:opacity-100" src="/assets/icons/growArrow.svg" alt="ARROW"/>
            </span>
    );
};

export default GrowButton;