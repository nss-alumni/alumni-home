import { connect } from 'react-redux'
import { getAllInvolvements } from 'data/involvements'
import InvolvementList from 'components/InvolvementList'

const mapStateToProps = state => ({
  involvements: getAllInvolvements(state),
})

export default connect(mapStateToProps)(InvolvementList)
