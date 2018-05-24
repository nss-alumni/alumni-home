import { connect } from 'react-redux'
import EventList from 'containers/EventListWithFetch'
import React from 'react'
import Tile from './Tile'

const mapStateToProps = _state => ({
  title: 'Upcoming Events',
  children: <EventList />,
})

export default connect(mapStateToProps)(Tile)
