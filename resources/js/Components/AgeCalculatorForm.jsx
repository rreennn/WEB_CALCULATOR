import React, { useState } from "react";

const AgeCalculatorForm = ({ calculateAge }) => {
    const [birthDate, setBirthDate] = useState("");
    const handleChangeDate = (e) => {
        setBirthDate(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateAge(birthDate);
    };
    return (
        <>
            <div className="bg-sky-200 mt-2 rounded-md pb-10 px-3">
                <form className="mt-10" onSubmit={handleSubmit}>
                    <input
                        value={birthDate}
                        type="date"
                        onChange={handleChangeDate}
                    />
                    <button
                        disabled={!birthDate}
                        type="submit"
                        className="btn shadow-md"
                    >
                        Calculate Age!
                    </button>
                </form>
            </div>
        </>
    );
};

export default AgeCalculatorForm;
