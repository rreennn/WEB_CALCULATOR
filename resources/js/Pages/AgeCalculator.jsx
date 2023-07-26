import { differenceInYears } from "date-fns";
import { differenceInMonths } from "date-fns";
import { differenceInDays } from "date-fns";
import AgeCalculatorForm from "@/Components/AgeCalculatorForm";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";
import AgeResult from "@/Components/AgeResult";
import Footer from "@/Components/Footer";

export default function AgeCalculator() {
    const [age, setAge] = useState(null);

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        const ageYears = differenceInYears(today, birthDateObj);
        const ageMonths = differenceInMonths(today, birthDateObj);
        const ageDays = differenceInDays(today, birthDateObj);

        setAge({
            years: ageYears,
            months: ageMonths,
            days: ageDays,
        });
    };

    return (
        <>
            <Navbar />
            <div className="h-[85vh] flex items-center flex-col">
              <h1 className="text-xl font-bold mt-10">Age Calculator</h1>
                <AgeCalculatorForm calculateAge={calculateAge} />
                {age && <AgeResult age={age} />}
            </div>
            <Footer />
        </>
    );
}
