import ReactGA from 'react-ga'

export const initGA = () => {
	if(!process.env.GOOGLE_ANALYTICS_ID) return
	console.log('Google Analytics init')
	ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
}

export const logPageView = () => {
	if(!process.env.GOOGLE_ANALYTICS_ID) return
	console.log(`Logging pageview for ${window.location.pathname}`)
	ReactGA.set({ page: window.location.pathname })
	ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
	if(!process.env.GOOGLE_ANALYTICS_ID) return
	if(category && action){
		ReactGA.event({ category, action })
	}
}

export const logException = (description = '', fatal = false) => {
	if(!process.env.GOOGLE_ANALYTICS_ID) return
	if (description) {
		ReactGA.exception({ description, fatal })
	}
}
