import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useReducer } from "react";
import DigitButtons from "@/Components/DigitButtons";
import OperationButtons from "@/Components/OperationButtons";
import Footer from "@/Components/Footer";

export const ACTIONS = {
    ADD_DIGIT: `add-digit`,
    CHOOSE_OPERATION: `choose-operation`,
    CLEAR: `clear`,
    DELETE_DIGIT: `delete-digit`,
    EVALUATE: `evaluate`,
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if(isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "÷":
            computation = prev / current
            break
    }

    return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
})

function formatOperand(operand) {
    if (operand == null) return
    const [integer, decimal] = operand.split('.')
    if(decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function reducer(state, { type, payload }) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite) {
                return {
                    ...state, 
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if(payload.digit === "0" && state.currentOperand === "0") {return state}
            if(payload.digit === "." && state.currentOperand.includes(".")) {return state}
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) {
                return state
            }

            if(state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }

            if(state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }

            return{
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }

        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null
                }
            }
            if (state.currentOperand == null) return state
            if (state.currentOperand.length === 1) {
                return {
                    ...state,
                    currentOperand: null
                }
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }

        case ACTIONS.EVALUATE:
            if(
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) {
                return state
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            }
    }
}

export default function MathCalculator() {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    return (
        <>
            <Head title="Math Calculator" />
            <Navbar />
            <div className="container h-[81vh] flex flex-col items-center justify-center bg-base-200">
                <h2 className="text-xl pb-2">Simple Math Calculator</h2>
                <div className="calculator flex flex-col justify-center items-center bg-slate-400 p-5 rounded-md">
                    <div className="output h-12">
                        <div className="previous-operand w-[200px]">{formatOperand(previousOperand)} {operation}</div>
                        <div className="current-operand text-xl text-right">{formatOperand(currentOperand)}</div>
                    </div>
                    <div className="m-1">
                        <button className="btn shadow-md mx-0.5 w-[108px]" onClick={() => dispatch({ type : ACTIONS.CLEAR })}>AC</button>
                        <button className="btn shadow-md" onClick={() => dispatch({ type : ACTIONS.DELETE_DIGIT })}>DE</button>
                        <OperationButtons operation="÷" dispatch={dispatch} />
                    </div>
                    <div className="m-1">
                        <DigitButtons digit="1" dispatch={dispatch} />
                        <DigitButtons digit="2" dispatch={dispatch} />
                        <DigitButtons digit="3" dispatch={dispatch} />
                        <OperationButtons operation="*" dispatch={dispatch} />
                    </div>
                    <div className="m-1">
                        <DigitButtons digit="4" dispatch={dispatch} />
                        <DigitButtons digit="5" dispatch={dispatch} />
                        <DigitButtons digit="6" dispatch={dispatch} />
                        <OperationButtons operation="+" dispatch={dispatch} />
                    </div>
                    <div className="m-1">
                        <DigitButtons digit="7" dispatch={dispatch} />
                        <DigitButtons digit="8" dispatch={dispatch} />
                        <DigitButtons digit="9" dispatch={dispatch} />
                        <OperationButtons operation="-" dispatch={dispatch} />
                    </div>
                    <div className="m-1">
                        <DigitButtons digit="." dispatch={dispatch} />
                        <DigitButtons digit="0" dispatch={dispatch} />
                        <button className="btn shadow-md mx-0.5 w-[108px]" onClick={() => dispatch({ type : ACTIONS.EVALUATE })} >=</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
