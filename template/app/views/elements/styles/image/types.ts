import { ResourceType } from 'types';

export interface ImageProps {
  source: ResourceType; // source

  tintColor?: string; // tintColor
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'; // resizeMode
}

export interface ImageStyleProps {
  source: ResourceType;

  tintColor?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}
