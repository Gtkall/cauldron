export const calculateMatch = (code1: string, code2: string): number => {
        console.log("Results are: ", code1, code2);

        const code1a = parseInt(code1[0]) + parseInt(code1[1]);
        const code1b = parseInt(code1[2]) + parseInt(code1[3]);
        const code1c = parseInt(code1[4]) + parseInt(code1[5]);

        const code2a = parseInt(code2[0]) + parseInt(code2[1]);
        const code2b = parseInt(code2[2]) + parseInt(code2[3]);
        const code2c = parseInt(code2[4]) + parseInt(code2[5]);

        let matchCount = 0;

        if (code1a === code2a) matchCount++;
        if (code1b === code2b) matchCount++;
        if (code1c === code2c) matchCount++;

        return matchCount * 33;
    };
