import { connect } from 'react-redux'
import { getBoardMembers } from 'data/alumni'
import BoardListing from 'components/BoardListing'

const mapStateToProps = state => ({
  boardMembers: getBoardMembers(state),
})

export default connect(mapStateToProps)(BoardListing)
