import { useEffect, useState } from 'react';
import { DEFAULT_CODE_LENGTH } from '../constant';
import startSmsHandling from '../startSmsHandling';
import retrieveVerificationCode from '../retrieveVerificationCode';

export default function useOtpConsent(senderID, codeLength = DEFAULT_CODE_LENGTH) {
  const [code, setCode] = useState('');
  console.log('senderID on useOtpConsent', senderID);
  useEffect(() => {
    const stopSmsHandling = startSmsHandling(senderID, (event) => {
      const receivedSms = event?.sms;
      if (!receivedSms) {
        console.warn('No SMS received!');
        return;
      }

      const retrievedCode = retrieveVerificationCode(receivedSms, codeLength);
      if (!retrievedCode) {
        console.warn('No code retrieved!');
        return;
      }

      setCode(retrievedCode);
    });
    return stopSmsHandling;
  }, [codeLength]);

  return code;
}