import React, { Component } from 'react'
import PropTypes from 'prop-types'


class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    onChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button className="btn" style={{flex: '1'}}>
                    Submit
                </button>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

export default AddTodo