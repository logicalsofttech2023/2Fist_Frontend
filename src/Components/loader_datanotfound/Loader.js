import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

const Loader = () => {
    return (
        <>
            <div className='text-center'>
                <ProgressSpinner style={{ width: '50px', height: '50px' }} />
            </div>
        </>
    )
}

export default Loader