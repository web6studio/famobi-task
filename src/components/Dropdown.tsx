import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Select, { Item } from 'react-native-picker-select';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles';

type Props = {
  value: string;
  items: Item[];
  onChange: (val: string) => void;
};

// const renderIcon = () => <Icon name="chevron-down-outline" />;

const Dropdown: FunctionComponent<Props> = ({ onChange, items, value }) => {
  return (
    <Select
      value={value}
      items={items}
      onValueChange={onChange}
      placeholder={{}}
      style={styles}
      useNativeAndroidPickerStyle={false}
      // // @ts-expect-error
      // Icon={renderIcon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 5,
  },
  inputIOS: {
    paddingRight: 16,
    fontSize: 15,
    lineHeight: 15,
    height: 36,
    color: Colors.filter,
  },
  inputAndroid: {
    paddingRight: 16,
    fontSize: 15,
    lineHeight: 15,
    height: 36,
    color: Colors.filter,
  },
});

export default Dropdown;
