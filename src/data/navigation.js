// ACTIONS
export const ABOUT_PAGE_NAVIGATED = 'navigation/ABOUT_PAGE_NAVIGATED'
export const EVENTS_PAGE_NAVIGATED = 'navigation/EVENTS_PAGE_NAVIGATED'
export const HOME_PAGE_NAVIGATED = 'navigation/HOME_PAGE_NAVIGATED'

// ACTION CREATORS
export const aboutPageNavigated = () => ({ type: ABOUT_PAGE_NAVIGATED })
export const eventsPageNavigated = () => ({ type: EVENTS_PAGE_NAVIGATED })
export const homePageNavigated = () => ({ type: HOME_PAGE_NAVIGATED })
