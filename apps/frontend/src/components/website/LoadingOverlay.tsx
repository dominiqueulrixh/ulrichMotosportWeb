import React, { useEffect } from 'react';

export function LoadingOverlay() {
  const lineWidths = ['82%', '64%', '92%', '70%'];
  useEffect(() => {
    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    document.documentElement.style.setProperty('--skeleton-overlay-top', `${headerHeight}px`);
    return () => document.documentElement.style.removeProperty('--skeleton-overlay-top');
  }, []);

  return (
    <div className="loading-overlay">
      <div className="loading-overlay__content">
        <div className="loading-overlay__hero">
          <div className="loading-overlay__hero-text">
            <div className="loading-overlay__lines">
              {lineWidths.map((width, idx) => (
                <div
                  key={idx}
                  className="skeleton-block loading-overlay__line"
                  style={{ width }}
                />
              ))}
            </div>
            <div className="loading-overlay__buttons">
              <div className="skeleton-block loading-overlay__button" style={{ width: '190px' }} />
              <div className="skeleton-block loading-overlay__button" style={{ width: '170px' }} />
            </div>
          </div>
          <div className="skeleton-block loading-overlay__image" />
        </div>
        <div className="loading-overlay__stats">
          {[0, 1, 2].map(idx => (
            <div key={idx} className="skeleton-block loading-overlay__stat-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
