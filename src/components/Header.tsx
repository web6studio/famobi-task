import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dropdown from './Dropdown';
import { Colors, Fonts } from '../styles';
import { PLATFORM_OPTIONS, CATEGORY_OPTIONS, SORT_OPTIONS } from '../constants';

type Props = {
  onFiltersChange: (filters: Filters) => void;
  filters: Filters;
};

const FilterHeader: FunctionComponent<Props> = ({
  onFiltersChange,
  filters,
}) => {
  const handlePlatformChange = (val: string) => {
    const updatedFilters = { ...filters, platform: val };
    onFiltersChange(updatedFilters);
  };

  const handleCategoryChange = (val: string) => {
    const updatedFilters = { ...filters, platform: val };
    onFiltersChange(updatedFilters);
  };

  const handleSortChange = (val: string) => {
    const updatedFilters = { ...filters, platform: val };
    onFiltersChange(updatedFilters);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Free-To-Play Games</Text>
      <View style={styles.filters}>
        <View style={styles.filter}>
          <Text style={styles.label}>Platform: </Text>
          <Dropdown
            value={filters.platform}
            items={PLATFORM_OPTIONS}
            onChange={handlePlatformChange}
          />
        </View>
        <View style={styles.filter}>
          <Text style={styles.label}>Genre/Tag: </Text>
          <Dropdown
            value={filters.category}
            items={CATEGORY_OPTIONS}
            onChange={handleCategoryChange}
          />
        </View>
        <View style={styles.filter}>
          <Text style={styles.label}>Sort by: </Text>
          <Dropdown
            value={filters.sort}
            items={SORT_OPTIONS}
            onChange={handleSortChange}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: Colors.background,
    borderBottomColor: '#1c1c1c99',
    borderBottomWidth: 1,
    shadowColor: '#000000',
    elevation: 3,
  },
  title: {
    color: Colors.heading,
    fontSize: 32,
    fontWeight: '500',
    paddingBottom: 10,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    lineHeight: 30,
    ...Fonts.text,
  },
  filter: {
    flexBasis: '50%',
    flexDirection: 'row',
  },
});

export default FilterHeader;
