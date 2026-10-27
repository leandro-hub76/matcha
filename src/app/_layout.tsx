import { DMSans_800ExtraBold } from '@expo-google-fonts/dm-sans';
import { Outfit_400Regular } from '@expo-google-fonts/outfit';
import { Rubik_600SemiBold } from '@expo-google-fonts/rubik';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
  DMSans_800ExtraBold,
  Rubik_600SemiBold,
  Outfit_400Regular,
});

if (!fontsLoaded) {
  return null;
}
  return (
    <Stack
      screenOptions={{
        title: '',
        headerShadowVisible: false,
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontFamily: fonts.h2 },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="product/[id]"
        options={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.onPrimary }}
      />
      <Stack.Screen name="order" options={{ title: 'Tu pedido' }} />
      <Stack.Screen name="order-confirmed" options={{ headerShown: false }} />
    </Stack>
  );
}