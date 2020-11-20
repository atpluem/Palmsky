import React from 'react'
import Header from '../components/Header'

export default function _app({ Component }) {
    return (
        <div>
            <Header />
            <Component />
        </div>
    )
}
