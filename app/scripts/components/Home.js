import React from 'react'
import { connect } from 'react-redux'
import { fetchMessage } from './../actions/fetchMessage'

@connect((store) => {
  console.log(store)
  return {
    message: store.retrieveMessage.message,
    dispatch: store
  }
})

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.dispatch(fetchMessage());
  }
  render() {
    console.log(this.props.data)
    if (this.props.message === undefined) {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>{this.props.message}!</div>
      )
    }
  }
}
