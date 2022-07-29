import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  return (
    <>
      <ScrollBar />
      <SearchBar />
    </>
  );
}

const ScrollBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const ref = useRef(null);
  const progressRef = useRef(null);
  const rateRef = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const rate = window.scrollY / scrollHeight;
      const top = (window.innerHeight - ref.current.offsetHeight - 60) * rate;

      rateRef.current.innerHTML = Math.round(rate * 100) + '%';
      ref.current.style.top = top + 'px';
      progressRef.current.style.height = rate * 90 + '%';
      +'px';
    }
  };

  useEffect(() => {
    setScrollHeight(
      document.querySelector('#__docusaurus').scrollHeight - window.innerHeight,
    );
  }, []);

  useEffect(() => {
    onScroll();

    document.addEventListener('scroll', onScroll);

    console.log(scrollHeight);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrollHeight]);

  return (
    <>
      <div className="scrollBar" ref={ref}>
        <div>=</div>
        <div></div>

        <div className="rate" ref={rateRef}>
          100%
        </div>
      </div>

      <div className="progress" ref={progressRef}></div>
      <div className="progressBg"></div>

      <input
        type="range"
        max={scrollHeight}
        className="scrollInput"
        onChange={e => {
          window.scrollTo(0, e.target.value);
        }}
      />
    </>
  );
};
