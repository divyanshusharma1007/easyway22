import React from 'react'
import ServiceContainer from './ServiceContainer'
export default function Features() {
    return (
        <div className='bg-slate-100 hidden'>
            {/* remove hiddens */}
            <hr />
            <h1 className="text-center text-3xl font-mono font-bold mt-10"> Categories</h1>
            <ServiceContainer/>
        </div>
    )
}