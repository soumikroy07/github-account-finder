import React from 'react'

function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details, using Github api. This
                is part of my self learning project
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Made By :
                <a className='text-white' href='https://www.linkedin.com/in/soumik-roy-2a4b561b0/'>
                    Soumik Roy
                </a>
            </p>
        </>
    )
}

export default About