import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createPoll } from '../actions/poll'


class CreatePoll extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            question: '',
            options: ['', '']
        }
    }

    handleAddOption = (e) => { this.setState({ options: [...this.state.options, '']})}
    handleSubmit = (e) => { 
        e.preventDefault()
        const { question, options } = this.state
        this.props.createPoll({ question, options })
    }
    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value })}
    handleChangeOption = (e, index) => {
        const options = [...this.state.options]
        options[index] = e.target.value
        this.setState({ options })
    }

    render () {
        const options = this.state.options.map((option, i) => (
            <Fragment key={i}>
                <label className="form-label">option {i+1}</label>
                <input 
                    className="form-input"
                    type="text"
                    value={option}
                    onChange={(e) => this.handleChangeOption(e, i)}
                />
            </Fragment>
        ))
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="question">question</label>
                <input
                    className="form-input"
                    name="question"
                    type="text"
                    value={this.state.question}
                    onChange={this.handleChange}
                />
                <div className="container">{options}</div>

                <div className="button-center">
                    <button 
                        type="button" 
                        className="button"
                        onClick={this.handleAddOption}
                    >
                        Add option
                    </button>
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { createPoll })(CreatePoll)