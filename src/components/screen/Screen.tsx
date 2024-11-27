import classes from './style.module.css'
import { Scanner } from '../scanner/Scanner';
import { ProgressiveText } from '../progressiveText/ProgressiveText';
import { useEffect, useState } from 'react';

function Screen() {

  const instructions: { text: string, action: 'none' | 'input' }[] = [
    { text: "> Initializing Nye Extrapolator Compatibility Capacitor...", action: 'none' },
    { text: "\n >Scan LOVER_1", action: 'input' },
    { text: "\n >Scan LOVER_2", action: 'input' },
    { text: "\n >Calculating compatibility...", action: 'none' },
    { text: "\n >Lovers compatibility is: ", action: 'none' },
    { text: "\n >REBOOT?", action: 'input' }
  ]

  const [step, setStep] = useState(0);
  const [loversScanned, setLoversScanned] = useState(0);

  return (
    <>
      <div className={classes.screen}>
        <ProgressiveText onDone={() => {
          console.log(step);
          return setStep(prev => prev + 1);
        }} speed={50} text={instructions[step].text} action={instructions[step].action} />
        {loversScanned < 2 && <Scanner handleScanResult={(scanResult: any) => {
          setStep(prev => prev + 1);
          setLoversScanned(prev => prev + 1);
          return console.log("scanned!", scanResult);
        }}></Scanner>}
      </div>

    </>
  );
}

export default Screen;
