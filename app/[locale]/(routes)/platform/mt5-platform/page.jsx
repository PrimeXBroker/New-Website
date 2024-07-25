import Banner from '@/our_pages/platform/mt5-platform/Banner';
import JoinPrimex from '@/our_pages/platform/mt5-platform/JoinPrimex';
import KeyFeatures from '@/our_pages/platform/mt5-platform/KeyFeatures';
import ProcessTimeline from '@/our_pages/platform/mt5-platform/steps';

import React from 'react'

const Mt5Platform = () => {
  return (
    <>
    <Banner/>
    <KeyFeatures/>
    <ProcessTimeline title={`How to Get Started With`} title2={`MT5 on PrimeX`} />
    <JoinPrimex/>
    </>
  )
}

export default Mt5Platform;