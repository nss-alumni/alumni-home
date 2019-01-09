import { Firebase } from 'services'

/*
{
  id: null,
  title: null,
  description: null,
  contact: null,
}
*/

export const getAll = () => Firebase.get('get-involved.json')
