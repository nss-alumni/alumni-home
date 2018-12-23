# Data Modules

The data modules primarily follow the [redux ducks](https://github.com/erikras/ducks-modular-redux) pattern with the addition of epics for api operations related to the data.


### Record

For data that has an expected shape, an immutable Record should be defined for the data, with any relevant default values. This provides a consistent structure to work with the data.

```javascript
import { Record } from 'immutable'

export const User = Record({
  id: null,
  name: null,
})
```


### Actions and Action Creators

To reduce boilerplate code, the `creator` and `scopedCreator` utility functions enacapsulates both action and action creator definitions.

Payload and meta options may be passed to define how they are constructed based on the resulting creator's arguments.

* `false` - Leave the payload undefined
* a function - Accepts the arguments given to the creator, and the resulting value becomes the payload
* an array - Create a function that returns an object with positionally matched keys from the array and values as given to the function
* Any other value results in an identity function for the payload's value

`scopedCreator` is a higher-order function to allow specifying a prefix key for the created actions. The resulting function takes the same arguments as `creator` and returns an action creator. Generally, `scopedCreator` should be used to provide the data module key to associate the actions with the specific data module.

```javascript
const scoped = scopedCreator('users')

export const fetchUsers = scoped('FETCH_USERS', false)
export const fetchUsersSucceeded = scoped('FETCH_USERS_SUCCEEDED')
export const fetchUsersFailed = scoped(
  'FETCH_USERS_FAILED',
  true,
  () => ({ message: 'Could not get users.' })
)
```

is equivalent to

```javascript
export const fetchUsers = creator('users/FETCH_USERS', false)
export const fetchUsersSucceeded = creator('users/FETCH_USERS_SUCCEEDED')
export const fetchUsersFailed = creator(
  'users/FETCH_USERS_FAILED',
  true,
  () => ({ message: 'Could not get users.' })
)
```

The resulting action creators have their `toString` methods defined to return the action type, allowing them to be used for matches in epics and reducers.


### Reducer

The default export of data modules should be the reducer created with the `createReducer` utility function.

```javascript
import createReducer from 'utils/createReducer'

export default createReducer(Map(), {
  [fetchUsersSucceeded]: (_state, { payload: users }) => users,
})
```


### Selectors

At minimum, the selector to get the data module's state should be defined. Selectors that do not cross data boundaries may also be defined as needed. Any selectors that do work (map, filter, etc.) should be created with `createSelector` from the `reselect` library,

```javascript
import { createSelector } from 'reselect'

export const getAllUsers = state => state.get('users')
export const getUsersWithShortNames = createSelector([ getAllUsers ], users =>
  users.filter(u => u.name.length <= 5)
)
```


### Epics

A single `epic` may be exported for api requests or combined related epics.

### API Requests

For api requests, the `ApiRequest` function creates an object with the actions, creators, and an epic surrounding the lifecycle of the request:

* `requestKey` - the key used to track the request
* `REQUEST` - the type to begin the request
* `SUCCEEDED` - the type for a successful request
* `FAILED` - the type for a failed request
* `request` - the REQUEST action creator
* `succeeded` - the SUCCEEDED action creator
* `failed` - the FAILED action creator
* `epic` - the generated epic

```javascript
export const fetchUsers = ApiRequest({
  moduleKey: 'users',
  actionBase: 'FETCH_USERS',
  error400: 'Could not get users',
  apiFn: UsersResource.getAll,
  mapResponseDataFn: data =>
    Map(Object.entries(data).map(([k, v]) => [k, Users(v)])),
})
```
