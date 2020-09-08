/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

export default function ({activeTab, setActiveTab}) {
  const onTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => onTabChange('pending')}>
        <View
          style={{
            ...styles.tabContainer,
            borderBottomWidth: activeTab === 'pending' ? 2 : 0,
          }}>
          <Text
            style={{
              ...styles.tabTitle,
              opacity: activeTab === 'pending' ? 1 : 0.8,
            }}>
            Pending
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onTabChange('completed')}>
        <View
          style={{
            ...styles.tabContainer,
            borderBottomWidth: activeTab === 'completed' ? 2 : 0,
          }}>
          <Text
            style={{
              ...styles.tabTitle,
              opacity: activeTab === 'completed' ? 1 : 0.8,
            }}>
            Completed
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onTabChange('canceled')}>
        <View
          style={{
            ...styles.tabContainer,
            borderBottomWidth: activeTab === 'canceled' ? 2 : 0,
          }}>
          <Text
            style={{
              ...styles.tabTitle,
              opacity: activeTab === 'canceled' ? 1 : 0.8,
            }}>
            Canceled
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
