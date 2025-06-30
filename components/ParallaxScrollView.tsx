import React from 'react';
import { View, ViewProps } from 'react-native';

const ParallaxScrollView: React.FC<ViewProps> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

export default ParallaxScrollView; 