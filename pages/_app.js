import React from 'react'
import Header from '../components/Header'
import '../styles/librarySheet.css' //StyleSheet for libraryPage
import '../styles/profileSheet.css' //StyleSheet for UserPage

export default function _app({ Component }) {
    return (
        <div>
            <Header />
            <Component />
        </div>
    )
}
