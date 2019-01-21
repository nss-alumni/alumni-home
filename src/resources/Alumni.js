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

export const getAll = () => Firebase.get('alumni.json')

export const getBoardMembers = () =>
  getAll()
    .then(Object.entries)
    .then(alumni => alumni.filter(([_id, a]) => a.isBoardMember))
    .then(boardMembers => boardMembers.reduce(entriesIntoObject, {}))
