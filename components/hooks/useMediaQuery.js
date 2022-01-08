import { useState, useCallback, useEffect } from 'react';

const sizes = {
  xlarge: 1650,
  large: 1280,
  medium: 768,
  small: 400
}

export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export const useIsXLarge = () => useMediaQuery(sizes.xlarge);
export const useIsLarge = () => useMediaQuery(sizes.large);
export const useIsMedium = () => useMediaQuery(sizes.medium);
export const useIsSmall = () => useMediaQuery(sizes.small);