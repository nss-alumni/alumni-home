import { connect } from 'react-redux'
import InvolvementListFromState from 'containers/InvolvementListFromState'
import React from 'react'
import Tile from './Tile'

const mapStateToProps = _state => ({
  title: `Get Involved`,
  children: <InvolvementListFromState />,
})

export default connect(mapStateToProps)(Tile)
