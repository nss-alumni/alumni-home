import Donate from 'components/Donate'
import EventList from 'components/EventList'
import Header from 'components/Header'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Tile from 'components/Tile'
import { colors } from 'theme'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'color': colors.text,
    'margin': '0 2.5rem',
    'text-align': 'left',
  },
  tileContainer: {
    'display': 'flex',
  },
}

class EventPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      events: [
        {
          startDate: '2017-8-5',
          description: 'The description of the event',
          link: 'http://google.com',
          name: 'Event name',
        },
        {
          startDate: '2017-8-6',
          description: 'The description of the event',
          link: 'http://google.com',
          name: 'Event name 2',
        },
        {
          startDate: '2017-8-7',
          description: 'The description of the event',
          link: 'http://google.com',
          name: 'Event name 3',
        },
        {
          startDate: '2017-8-8',
          description: 'The description of the event',
          link: 'http://google.com',
          name: 'Event name 4',
        },
        {
          startDate: '2017-8-9',
          description: 'The description of the event',
          link: 'http://google.com',
          name: 'Event name 5',
        },
      ],
    }
  }

  render = () => {
    const { classes } = this.props

    return (
      <div className={classes.app}>
        <Header />
        <div className={classes.tileContainer}>
          <Tile title='Upcoming Events'>
            <EventList list={this.state.events} />
          </Tile>
          <Tile title='Donations'>
            <Donate />
          </Tile>
        </div>
      </div>
    )
  }
}

EventPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default injectSheet(sheet)(EventPage)
