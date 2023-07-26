
const AgeResult = ({ age }) => {
  return (
    <>
        <div className="bg-sky-100 p-3 rounded-md border border-solid mt-10 flex justify-center items-center">
            You are {age.years} years, or {age.months} months, or {age.days} days old!
        </div>
    </>
  )
}

export default AgeResult