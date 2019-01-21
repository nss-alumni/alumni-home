import { Api } from 'services'

/*
{
  name: null,
  description: null,
  link: null,
  startTime: null,
  endTime: null,
}
*/

export const getAll = ({ cancelToken } = {}) =>
  Api.get('events', { cancelToken })
