import ReactGA from 'react-ga';

const ANALYTICS_ID = 'UA-109148552-1';

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const loadGoogleAnalytics = () => {
  ReactGA.initialize(ANALYTICS_ID);
};
