import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import appConfig from '../app.config';

interface Props extends TouchableOpacityProps {
  title: string;
}

const SWButton: React.FC<Props> = ({ title, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: 'blue',
  },
});

export default SWButton;
