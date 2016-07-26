import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './mainLayout.css'

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div styleName='container'>
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

export default CSSModules(MainLayout, styles );
