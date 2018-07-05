import { Observable } from 'rxjs/Rx'
import { type } from 'utils/data'
import apiRequestBuilder from './apiRequestBuilder'

const testRequest = apiRequestBuilder({
  moduleKey: 'test',
  actionBase: 'DO',
  requestParams: ['id'],
  responseParams: ['thing'],
  apiFn: id => Observable.of({ id }),
  mapResponseDataFn: d => ({ ...d, added: 'detail' }),
})

const modType = type('test')
const REQUEST_TYPE = modType('DO')
const SUCCEEDED_TYPE = modType('DO_SUCCEEDED')
const FAILED_TYPE = modType('DO_FAILED')

test('creates the lifecycle types', () => {
  expect(testRequest.REQUEST).toEqual(REQUEST_TYPE)
  expect(testRequest.SUCCEEDED).toEqual(SUCCEEDED_TYPE)
  expect(testRequest.FAILED).toEqual(FAILED_TYPE)
})

test('creates the lifecycle action creators', () => {
  expect(testRequest.request()).toHaveProperty('type', REQUEST_TYPE)
  expect(testRequest.succeeded()).toHaveProperty('type', SUCCEEDED_TYPE)
  expect(testRequest.failed()).toHaveProperty('type', FAILED_TYPE)
})

test('the created lifecycle actions have the request key', () => {
  expect(testRequest.request()).toHaveProperty(
    'meta.api.requestKey',
    testRequest.requestKey,
  )
  expect(testRequest.succeeded()).toHaveProperty(
    'meta.api.requestKey',
    testRequest.requestKey,
  )
  expect(testRequest.failed()).toHaveProperty(
    'meta.api.requestKey',
    testRequest.requestKey,
  )
})

test('the created lifecycle actions have the request steps', () => {
  expect(testRequest.request()).toHaveProperty('meta.api.requestStep', 'init')
  expect(testRequest.succeeded()).toHaveProperty(
    'meta.api.requestStep',
    'success',
  )
  expect(testRequest.failed()).toHaveProperty('meta.api.requestStep', 'fail')
})

test('uses requestParams for the request creator', () => {
  expect(testRequest.request('thingId')).toHaveProperty('payload.id', 'thingId')
})

test('uses responseParams for the succeeded creator', () => {
  expect(testRequest.succeeded('data')).toHaveProperty('payload.thing', 'data')
})

test('results includes its request key', () => {
  expect(testRequest.requestKey).toBeDefined()
})

test('creates an epic', () => {
  expect(testRequest.epic).toBeDefined()
})

// TODO (adam): effectively test the epic
// responds to request action
// calls apiFn
// uses mapResponseDataFn
// returns success action
// catches to failed action
