/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  FlatListProps,
  ImageSourcePropType,
  RefreshControlProps as RefreshControlPropsBase,
} from 'react-native';
import type { UseFormReturn, Control } from 'react-hook-form';

// IMPORTANT Need to write a title ...IN (inner)

export interface LoginIN {
  username: string;
  password: string;
}

export type ReactChildren = { children?: React.ReactNode };
export type Any = any;
export type BaseFlatListProps = FlatListProps<Any>;
export type ResourceType = ImageSourcePropType;
export type RefreshControlProps = React.ReactElement<RefreshControlPropsBase>;
export type UseFormReturnType = UseFormReturn<Any>;
export type ControlType = Control<Any>;
export type ItemType = { [key in string]: Any };
