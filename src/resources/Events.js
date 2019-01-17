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

export const getAll = () => Api.get('events')
