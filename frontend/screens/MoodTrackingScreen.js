import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const MoodTrackingScreen = () => {
  const { theme } = useTheme();
  const { colors, typography } = theme;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
      <Text style={[typography.h2, { color: colors.textDark }]}>Mood Tracking</Text>
      <Text style={[typography.bodyMedium, { color: colors.textMedium, marginTop: 8 }]}>Coming soon</Text>
    </View>
  );
};
