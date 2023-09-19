export interface AppTypes {
  initialScreen: 'Auth' | 'Home';
  isLandscape: boolean;

  accessToken: string;
  refreshToken: string;
}

export interface ChangeAppInfoProps {
  key: keyof AppTypes;
  value: string;
}
