import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const ErrorMessage = ({ error }) => (
    <Fragment>
        {error.message && <div className="error">{error.message}</div>}
    </Fragment>
)

const mapStateToProps = (state) => ({
    error: state.error 
})

export default connect(mapStateToProps)(ErrorMessage)