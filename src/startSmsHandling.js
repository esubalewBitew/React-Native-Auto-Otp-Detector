import { Events } from './constant';
import { eventEmitter, SmsRetrieverModule } from './nativeApi';

async function startNativeSmsListener(senderID) {
    console.log('senderID on startNativeSmsListener on js part', senderID);
    try {
        await SmsRetrieverModule.startNativeSmsListener(senderID);
    } catch (e) {
        console.error(e);
    }
}

async function stopNativeSmsListener() {
    try {
        await SmsRetrieverModule.stopNativeSmsListener();
    } catch (e) {
        console.error(e);
    }
}

/*
Technically, the SMS receiving data flow consists of two parts:

1) System -> Native
This part uses the native SMS User Consent API to show the consent prompt and retrieves the SMS.

2) Native -> JS
This part emits an event to JS side with the SMS using default React Native event emitter, so that JS side is able to subscribe to the event and receive the SMS.
*/

export default function startSmsHandling(senderID, onSmsReceived) {
    startNativeSmsListener(senderID);
    const jsListener = eventEmitter.addListener(Events.PTG_SMS_RETRIEVED, onSmsReceived);

    function stopSmsHandling() {
        stopNativeSmsListener();
        jsListener.remove();
    }

    return stopSmsHandling;
}