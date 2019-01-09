import { Firebase } from 'services'

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
