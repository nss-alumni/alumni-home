import { creator, type } from 'utils/data'

const key = 'navigation'

// ACTIONS
export const ABOUT_PAGE_NAVIGATED = type(key, 'ABOUT_PAGE_NAVIGATED')
export const HOME_PAGE_NAVIGATED = type(key, 'HOME_PAGE_NAVIGATED')

// ACTION CREATORS
export const aboutPageNavigated = creator(ABOUT_PAGE_NAVIGATED)
export const homePageNavigated = creator(HOME_PAGE_NAVIGATED)
