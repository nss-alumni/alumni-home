import { Firebase } from 'services'

/*
{
  id: null,
  title: null,
  description: null,
  contact: null,
}
*/

export const getAll = ({ cancelToken } = {}) =>
  Firebase.get('get-involved.json', { cancelToken })
