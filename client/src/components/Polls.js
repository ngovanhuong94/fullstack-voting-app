import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPolls } from '../actions/poll'

class Polls extends React.Component {
    componentDidMount () {
        this.props.getPolls()
    }
    render () {
        const { polls } = this.props 
        return (
            <ul className="polls">
                { polls.map(poll => <li>
                    <Link to={`/poll/${poll._id}`}>{poll.question}</Link>
                </li>)}
            </ul>
        )
    }
}
    



const mapStateToProps = (state) => ({ polls: state.polls })


export default connect(mapStateToProps, { getPolls })(Polls)