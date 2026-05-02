export {}
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest
    .fn()
    .mockReturnValue(mockSafeAreaContext.useSafeAreaInsets),
}))
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native')
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockImplementation(() => Promise.resolve()),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: { source: 0 },
      brand: { source: 0 },
    }),
  }
})
