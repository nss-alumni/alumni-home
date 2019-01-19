import { makeStyles } from '@material-ui/styles'
import BoardMember from 'components/BoardMember'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: spacing.unit,
    marginTop: spacing.unit * 2,
  },
  member: {
    flex: '1 1 25%',
  },
}))

const nameSort = (a, b) => a.name.localeCompare(b.name)

const BoardListing = ({ boardMembers }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {Object.values(boardMembers)
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
        ))}
    </div>
  )
}

BoardListing.propTypes = {
  boardMembers: PropTypes.shape({
    email: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default BoardListing
