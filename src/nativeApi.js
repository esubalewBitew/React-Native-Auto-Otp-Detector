import { NativeEventEmitter, NativeModules } from 'react-native';

export const { SmsRetrieverModule } = NativeModules;

export const eventEmitter = new NativeEventEmitter(SmsRetrieverModule);