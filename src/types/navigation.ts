import {dataType} from './data';
import {HOME, PLACE} from '../navigation/screens';

export type RootStackParamList = {
  [HOME]: undefined;
  [PLACE]: dataType;
};
