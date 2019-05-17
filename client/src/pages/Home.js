import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Polls from '../components/Polls'

const Home = () => (
    <div>
        <ErrorMessage />
        <Polls />
    </div>
)

export default Home