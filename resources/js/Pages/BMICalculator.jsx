import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function BMICalculator() {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    let imgSrc = "";

    let calcBmi = (event) => {
        event.preventDefault();

        if (weight === null || height === null) {
            alert("Please enter a valid weight & height");
        } else {
            let bmi = weight / (((height / 100) * height) / 100);
            setBmi(bmi.toFixed(1));

            if (bmi < 17.0) {
                setMessage("You are very underweight");
            } else if (bmi >= 17.0 && bmi < 18.5) {
                setMessage("You are underweight");
            } else if (bmi >= 18.5 && bmi < 25.0) {
                setMessage("You are a healthy weight");
            } else if (bmi >= 25 && bmi < 30) {
                setMessage("You are overweight");
            } else if (bmi >= 30) {
                setMessage("You are very overweight");
            }
        }
    };

    let reload = () => {
        window.location.reload();
    };

    return (
        <>
            <Head title="BMI Calculator" />
            <Navbar />
            <div className="container-lg mx-auto h-[85vh] bg-base-200 flex flex-col items-center justify-center">
                <div className="wrapper bg-slate-400 p-5 rounded-md">
                    <div className="calculator p-5 flex flex-col justify-evenly rounded-md h-[350px] bg-slate-500">
                        <h2 className="text-xl text-center text-white">
                            BMI Calculator
                        </h2>
                        <form onSubmit={calcBmi} action="" className="">
                            <div className="mb-3 flex justify-between">
                                <label
                                    htmlFor=""
                                    className="pr-8 text-lg text-white"
                                >
                                    Weight in kilograms
                                </label>
                                <input
                                    placeholder="0"
                                    value={weight}
                                    onChange={(event) =>
                                        setWeight(event.target.value)
                                    }
                                    className="input input-sm input-bordered"
                                />
                            </div>
                            <div className="my-2 flex justify-between">
                                <label
                                    htmlFor=""
                                    className="text-lg text-white"
                                >
                                    Height in centimeters
                                </label>
                                <input
                                    placeholder="0"
                                    value={height}
                                    onChange={(event) =>
                                        setHeight(event.target.value)
                                    }
                                    className="input input-sm input-bordered"
                                />
                            </div>
                            <div className="text-center mt-6">
                                <button
                                    className="btn shadow-md mx-6 w-[100px]"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    className="btn shadow-md mx-6 w-[100px]"
                                    onClick={reload}
                                    type="submit"
                                >
                                    Clear
                                </button>
                            </div>
                        </form>

                        <div>
                            <h3 className="text-center text-white">
                                Your BMI is: {bmi}
                            </h3>
                            <p className="bg-sky-100 rounded-md mt-2 text-center first-line:marker:selection:">
                                {message}
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
