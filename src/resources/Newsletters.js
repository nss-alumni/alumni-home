import { Firebase } from 'services'

/*
{
  subject: null,
  sentDate: null,
  body: null,
}
*/

export const getAll = ({ cancelToken } = {}) =>
  Firebase.get('newsletters.json', { cancelToken })

const byDescendingSentDate = (n1, n2) => n2.sentDate.localeCompare(n1.sentDate)

export const getLatest = ({ cancelToken } = {}) =>
  getAll({ cancelToken })
    .then(Object.values)
    .then(newsletters => newsletters.sort(byDescendingSentDate))
    .then(newsletters => newsletters[0])
