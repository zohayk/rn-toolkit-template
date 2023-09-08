export interface AppTypes {
  initialScreen: 'Auth' | 'Home';

  accessToken: string;
  refreshToken: string;
}

export interface ChangeAppInfoProps {
  key: keyof AppTypes;
  value: string;
}
