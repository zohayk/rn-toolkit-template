import { useMemo, useEffect, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation as baseUseNavigation } from '@react-navigation/native';
import { Any, NavigationParamList } from 'types';
import store from 'store';
import { ActionCreator, bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch as baseUseDispatch } from 'react-redux';

export const useDispatch: () => typeof store.dispatch = baseUseDispatch;
export const useAction = <T extends ActionCreator<Any>>(action: T): T => {
  const baseDispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, baseDispatch), [baseDispatch]);
};

export const usePrevious = <T>(value: T): T | void => {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useNavigation: () => StackNavigationProp<NavigationParamList> = baseUseNavigation;

export const useSafeArea = useSafeAreaInsets;
