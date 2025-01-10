import React from 'react';

const SharedTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center'>
            <p className='text-yellow-600'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
}; 

export default SharedTitle;