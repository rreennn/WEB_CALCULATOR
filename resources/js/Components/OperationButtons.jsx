import { ACTIONS } from "@/Pages/MathCalculator"

export default function OperationButtons({ dispatch, operation }) {
  return (
    <>
        <button className="btn shadow-md w-[50px] m-0.5" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>{ operation }</button>
    </>
  )
}