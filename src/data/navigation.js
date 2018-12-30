import { scopedCreator } from 'utils/data'

const scoped = scopedCreator('navigation')

// ACTION CREATORS
export const aboutPageNavigated = scoped('ABOUT_PAGE_NAVIGATED')
export const homePageNavigated = scoped('HOME_PAGE_NAVIGATED')
