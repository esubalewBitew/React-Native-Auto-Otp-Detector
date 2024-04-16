// import { Events } from './constants';
import { Events } from './constant';
import { eventEmitter } from './nativeApi';

export default function addErrorListener(onErrorReceived) {
    const listener = eventEmitter.addListener(Events.PTG_SMS_RETRIEVE_ERROR, onErrorReceived);

    function removeErrorListener() {
        listener.remove();
    }

    return removeErrorListener;
}