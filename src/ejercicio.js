export const ejercicio = (input) => {
    const states = {
            q0: {
                1: "q1",
                2: "q10",
            },
            q1: { "-": "q2" },
            q2: { E: "q3", },
            q3: {
                S: "q4", T: "q4", U: "q4", V: "q4", X: "q4", Y: "q4", Z: "q4"
            },
            q4: { "-": "q5" },
            q5: {
                0: "q6",
                1: "q9", 2: "q9", 3: "q9", 4: "q9", 5: "q9", 6: "q9", 7: "q9", 8: "q9", 9: "q9"
            },
            q6: {
                1: "q7", 2: "q7", 3: "q7", 4: "q7", 5: "q7", 6: "q7", 7: "q7", 8: "q7", 9: "q7"
            },
            q7: {
                F: "q8", G: " q8", H: "q8", I: "q8", J: "q8", K: "q8", L: "q8", M: "q8", N: "q8",
                O: "q8", P: "q8", Q: "q8", R: "q8", S: "q8", T: "q8", U: "q8", V: "q8", W: "q8",
                X: "q8", Y: "q8", Z: "q8"
            },
            q9: {
                0: "q7", 1: "q7", 2: "q7", 3: "q7", 4: "q7", 5: "q7", 6: "q7", 7: "q7", 8: "q7", 9: "q7",
            },
            q10: {
                "-": "q11"
            },
            q11: {
                F: "q12"
            },
            q12: {
                A: "q13"
            },
            q13: {
                "-": "q14"
            },
            q14: {
                0: "q15",
                1: "q18", 2: "q18", 3: "q18", 4: "q18", 5: "q18", 6: "q18", 7: "q18", 8: "q18", 9: "q18"
            },
            q15: {
                1: "q16", 2: "q16", 3: "q16", 4: "q16", 5: "q16", 6: "q16", 7: "q16", 8: "q16", 9: "q16"
            },
            q16: {
                A: "q17", B: "q17", C: "q17", D: "q17", E: "q17", F: "q17", G: "q17", H: "q17", I: "q17",
                J: "q17", K: "q17", L: "q17", M: "q17", N: "q17", O: "q17", P: "q17", Q: "q17", R: "q17",
                S: "q17", T: "q17"
            },
            q18: {
                0: "q16", 1: "q16", 2: "q16", 3: "q16", 4: "q16", 5: "q16", 6: "q16", 16: "q16", 8: "q16", 9: "q16",
            }
    
    };

    let currentState = "q0"
    let message = "q0"
    let message2= "Cadena no valida, excede caracteres"

    for (let i = 0; i < input.length; i++) {
        const currentChar = input.substring(i, i + 1)

        try {
            if (!states[currentState][currentChar]) {
                message = `${message} X` 

                console.log({ success: false, msg: message });
                return { success: false, msg: message };
            }
        } catch (error) {
            message = `${message} X`

            console.log({ success: false, msg: message });
            return { success: false, msg: message };
        }
        currentState = states[currentState][currentChar];

        message = `${message} --> ${currentState}`
    }


    if (currentState === "q8" || currentState === "q17") {
        console.log({ success: true, msg: message });

        return { success: true, msg: message };
    }
    message = `${message} X`

    console.log({ success: false, msg: message });
    return { success: false, msg: message };
}
