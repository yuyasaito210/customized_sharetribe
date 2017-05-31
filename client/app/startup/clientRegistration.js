import ReactOnRails from 'react-on-rails';
import React from 'react';
import ReactDOM from 'react-dom';

import OnboardingTopBar from './OnboardingTopBarApp';
import OnboardingGuideApp from './OnboardingGuideApp';
import TopbarApp from './TopbarApp';
import LandingTopbarApp from './LandingTopbarApp';
import SearchPageApp from './SearchPageApp';
import ManageAvailabilityApp from './ManageAvailabilityApp';

ReactOnRails.register({
  OnboardingGuideApp,
  OnboardingTopBar,
  TopbarApp,
  LandingTopbarApp,
  SearchPageApp,
  ManageAvailabilityApp,
});

ReactOnRails.registerStore({
});

if (typeof window !== 'undefined') {
  window.React = React;
  window.ReactDOM = ReactDOM;
}
