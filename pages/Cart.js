import React from 'react'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import styles from '../styles/cart.module.scss'

export default function Cart() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={styles.selectAll}>
                            Select All 
                        </div>
                        <div>
                            sda
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
