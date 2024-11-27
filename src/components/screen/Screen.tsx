import { useState } from "react";
import { calculateMatch } from "../../util/calculateMatch";
import { debug } from "../../util/debug";
import { ProgressiveText } from "../progressiveText/ProgressiveText";
import { Scanner } from "../scanner/Scanner";
import classes from "./style.module.css";

const isDebug = true;

function Screen() {
    const instructions: { text: string; action: "none" | "input" }[] = [
        {
            text: "> Initializing Nye Extrapolator Compatibility Capacitor...",
            action: "none",
        },
        { text: "\n >Scan LOVER_1", action: "input" },
        { text: "\n >Scan LOVER_2", action: "input" },
        { text: "\n >Calculating compatibility...", action: "none" },
        { text: "\n >Lovers compatibility is: ", action: "none" },
        { text: "\n >REBOOT?", action: "input" },
    ];

    const print = debug(isDebug);

    const nextStep = () => {
      console.log("Next Step: ", currentStep + 1);
      setCurrentStep((prev) => prev + 1);
    }

    const renderInstructions = () => {
      switch (currentStep) {
        case 0:
          return <ProgressiveText onDone={nextStep} text={instructions[currentStep].text} speed={50} />
          break;
        case 1:
          return <ProgressiveText text={instructions[currentStep].text} speed={50} />
          break;
        case 2:
          return <ProgressiveText text={instructions[currentStep].text} speed={50} />
          break;
        case 3:
          return <ProgressiveText onDone={nextStep} text={instructions[currentStep].text} speed={50} />
          break;
        case 4:
          return <ProgressiveText text={instructions[currentStep].text + calculateMatch(result1, result2) + "%" + "\n>Reboot?"} speed={50} />
          break;
        default:
          break;
      }
    }

  const resultHandler = (scanResult: string) => {
    setCurrentStep((prev) => prev + 1);
      setLoversScanned((prev) => {
          if (prev === 0) {
              print(
                  "Inserting result for LOVER 1. Scanned lovers: " +
                      loversScanned
              );
              setResult1(scanResult);
              return prev + 1;
          } else {
              print(
                  "Inserting result for LOVER 2. Scanned lovers: " +
                      loversScanned
              );
              setResult2(scanResult);
          }

          return prev + 1;
      });
        console.log("scanned!", scanResult);
  };

    const [currentStep, setCurrentStep] = useState(0);
    const [loversScanned, setLoversScanned] = useState(0);
    const [result1, setResult1] = useState("");
    const [result2, setResult2] = useState("");

    return (
        <>
            <div className={classes.screen}>
                <div className="flex flex-row items-center justify-center gap-6 p-4">
                    <div className="flex-1 flex justify-center items-center min-h-[10rem]">
                        {renderInstructions()}
                    </div>
                    <div className="flex-1 flex justify-center items-center min-h-[10rem]">
                        {currentStep >= 1 && currentStep < 2 && (
                            <Scanner handleScanResult={resultHandler}></Scanner>
                        )}
                    </div>
                    {currentStep === 4 && (
                        <div className="flex justify-center items-center">
                            <button
                                className="w-44"
                                type="button"
                                onClick={() => window.location.reload()}
                            >
                                [REBOOT]
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Screen;
