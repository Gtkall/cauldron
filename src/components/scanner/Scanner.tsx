import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

type ScannerProps = {
    handleScanResult: Function;
};
export const Scanner = ({ handleScanResult }: ScannerProps) => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                qrbox: {
                    width: 300,
                    height: 300,
                },
                fps: 10,
            },
            false
        );

        scanner.render(onSuccess, onError);

        function onSuccess(scanResult: any) {
            scanner.pause(true);
            setTimeout(() => {
                scanner.resume();
                handleScanResult(scanResult);
            }, 2000);
        }

        function onError(error: any) {
            // console.log(error)
        }
    }, []);

    return (
        <div>
            {scanResult && <p>{scanResult}</p>}
            <div
                id="reader"
                style={{
                    width: "50%",
                    height: "auto",
                    filter: "grayscale(100%)",
                }}
            ></div>
        </div>
    );
};
