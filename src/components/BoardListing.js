import { Alumni } from 'data/alumni'
import { withStyles } from '@material-ui/core'
import BoardMember from 'components/BoardMember'
import PropTypes from 'utils/propTypes'
import React from 'react'

/* eslint-disable no-magic-numbers */
const styles = ({ spacing }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: spacing.unit,
    marginTop: spacing.unit * 2,
  },
  member: {
    flex: '1 1 25%',
  },
})
/* eslint-enable no-magic-numbers */

const nameSort = (a, b) => a.name.localeCompare(b.name)

const BoardListing = ({ classes, boardMembers }) => {
  const memberCards = boardMembers
    .toIndexedSeq()
    .sort(nameSort)
    .map(m => (
      <BoardMember
        className={classes.member}
        contact={m.email}
        key={m.email}
        name={m.name}
        picture={m.imageUrl}
        title={m.title}
      />
    ))

  return <div className={classes.container}>{memberCards}</div>
}

BoardListing.propTypes = {
  boardMembers: PropTypes.mapOf(PropTypes.instanceOf(Alumni)).isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BoardListing)
