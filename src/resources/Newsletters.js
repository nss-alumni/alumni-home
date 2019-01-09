import { Firebase } from 'services'

/*
{
  subject: null,
  sentDate: null,
  body: null,
}
*/

export const getAll = () => Firebase.get('newsletters.json')
