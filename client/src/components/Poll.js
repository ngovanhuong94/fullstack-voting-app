import React from 'react'
import { connect } from 'react-redux'
import { getPoll } from '../actions/poll'
import { Pie } from 'react-chartjs-2'
import { color } from '../utils/color'

class Poll extends React.Component {
    componentDidMount () {
        this.props.getPoll(this.props.match.params.id)
    }
    render () {
        const { poll } = this.props
        return (
            <div>
                <h3 className="poll-title">{poll.question}</h3>
                {poll.options && <Pie data={{
                    labels: poll.options.map(option => option.option),
                    datasets: [{
                        data: poll.options.map(option => option.votes + 1),
                        backgroundColor: poll.options.map(option => color())
                    }]
                }}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    poll: state.currentPoll
})

export default connect(mapStateToProps, { getPoll })(Poll)