import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Poll from '../components/Poll'


const PollPage = (props) => (
    <div>
        <ErrorMessage />
        <Poll {...props}/>
    </div>
)


export default PollPage