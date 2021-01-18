import React, { Suspense, lazy, useRef } from 'react'
import useIntersectionObserver from './hooks/useIntersectionObserver'

import './App.css';

const SliderSection = lazy(() => import('./components/Slider'));
// const CardsSection = lazy(() => import('./components/Sections'));

function App() {
  const sliderRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const isSliderVisible = useIntersectionObserver(sliderRef);
  const isCardsSectionVisible = useIntersectionObserver(cardsSectionRef);

  return (
    <div className="App">
       <div>
        <img src="https://static.e-stradivarius.net/5/static2/itxwebstandard/logo/logo.png?t=20210118023002269000767" alt="Stradivarius"/>
      </div>
      <section className="slider" ref={sliderRef}>
      {isSliderVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <SliderSection />
          </Suspense>
        )}
      </section>
        <section className="cards" ref={cardsSectionRef}>
      {isCardsSectionVisible && (
          <Suspense fallback={<div className="loading">Loading...</div>}>
            {/* <CardsSection /> */}
          </Suspense>
        )}
        </section>
    </div>
  );
}

export default App;
