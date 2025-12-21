import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useResponsive = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  const { width, height } = dimensions;
  const isTablet = width >= 768;
  const isLandscape = width > height;

  let columns = 3;
  if (width >= 1024) columns = 5;
  else if (width >= 768) columns = 4;
  else if (isLandscape) columns = 4;

  let regionalTop10Columns = 2;
  if (isTablet) regionalTop10Columns = 3;
  if (width >= 1024) regionalTop10Columns = 4;

  return {
    width,
    height,
    isTablet,
    isLandscape,
    columns,
    regionalTop10Columns,
  };
};