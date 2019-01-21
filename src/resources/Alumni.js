import { Firebase } from 'services'
import { entriesIntoObject } from 'utils'

/*
{
  name: null,
  title: null,
  cohort: null,
  email: null,
  github: null,
  linkedin: null,
  imageUrl: null,
  isBoardMember: false,
}
*/

export const getAll = ({ cancelToken } = {}) =>
  Firebase.get('alumni.json', { cancelToken })

export const getBoardMembers = ({ cancelToken } = {}) =>
  getAll({ cancelToken })
    .then(Object.entries)
    .then(alumni => alumni.filter(([_id, a]) => a.isBoardMember))
    .then(boardMembers => boardMembers.reduce(entriesIntoObject, {}))
