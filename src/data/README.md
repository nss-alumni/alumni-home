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


### Actions

The data's exported action names should be defined as SCREAMING_SNAKES with the values being a string of the module name with the action name. Including the module name prevents naming collisions across data modules.

```javascript
export const FETCH_USERS = 'users/FETCH_USERS'
export const FETCH_USERS_SUCCEEDED = 'users/FETCH_USERS_SUCCEEDED'
export const FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED'
```


### Action Creators

Actions should have matching action creators to facilitate the usage of creating the actions with the [flux standard action](https://github.com/redux-utilities/flux-standard-action) structure.

```javascript
export const fetchUsers = () => ({ type: FETCH_USERS })
export const fetchUsersSucceeded = users => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
})
export const fetchUsersFailed = error => ({
  type: FETCH_USERS_FAILED,
  payload: error,
  error: true,
  meta: {
    message: 'Could not get users.',
  },
})
```


### Reducer

The default export of data modules should be the reducer created with the `createReducer` utility function.

```javascript
import createReducer from 'utils/createReducer'

export default createReducer(Map(), {
  [FETCH_USERS_SUCCEEDED]: (_state, { payload: users }) => users,
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

API logic relating to the data should be defined as epics and using the relevant resource. Usually, a funciton to appropriately convert the data from the api is useful.

```javascript
import { Observable } from 'rxjs'
import UsersResource from 'resources/Users'

const mapData = data =>
  Map(Object.entries(data).map(([k, v]) => [k, Users(v)]))

export const fetchUsersEpic = action$ =>
  action$.ofType(FETCH_USERS).mergeMap(() =>
    UsersResource.getAll()
      .map(mapData)
      .map(fetchUsersSucceeded)
      .catch(e => Observable.of(fetchUsersFailed(e))),
  )
```
