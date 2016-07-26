import React from 'react'
import { Link } from 'react-router'

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <header>
          <h1><Link to="/">Durian</Link></h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
