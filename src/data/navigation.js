import { creator, type } from 'utils/data'

const key = 'navigation'
const modType = type(key)

// ACTIONS
export const ABOUT_PAGE_NAVIGATED = modType('ABOUT_PAGE_NAVIGATED')
export const HOME_PAGE_NAVIGATED = modType('HOME_PAGE_NAVIGATED')

// ACTION CREATORS
export const aboutPageNavigated = creator(ABOUT_PAGE_NAVIGATED)
export const homePageNavigated = creator(HOME_PAGE_NAVIGATED)
