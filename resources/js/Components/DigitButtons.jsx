import { ACTIONS } from "@/Pages/MathCalculator"

export default function DigitButtons({ dispatch, digit }) {
  return (
    <>
        <button className="btn shadow-md w-[50px] m-0.5" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }})}>{ digit }</button>
    </>
  )
}