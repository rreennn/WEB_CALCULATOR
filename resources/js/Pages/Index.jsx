import About from "@/Components/About";
import Footer from "@/Components/Footer";
import Heros from "@/Components/Heros";
import Navbar from "@/Components/Navbar";
import Notes from "@/Components/Notes";
import { Head, Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Home" />
            <div className="container-xl bg-base-200">
                <Navbar />
                <Heros />
                <div
                    className="about h-[95vh] flex my-[-10px] flex-col justify-center items-center"
                    id="about-section"
                >
                    <div className="flex gap-2">
                        <About />
                        <Notes />
                    </div>
                    <a href="#card-section">
                        <button className="btn btn-outline mt-3">Go!</button>
                    </a>
                </div>
                <div
                    className="content-card h-[85vh] flex justify-center"
                    id="card-section"
                >
                    <div className="cards flex mx-10 gap-4 items-center">
                        <div className="card w-[300px] bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={`${route(
                                        "index"
                                    )}/assets/images/math_calc.jpg`}
                                    alt=""
                                    srcset=""
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Simple Math Calculator
                                </h2>
                                <p>
                                    For addition, subtraction, multiplication,
                                    and division
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href={route("math-calc")}>
                                        <button className="btn btn-primary">
                                            Go!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[300px] bg-base-100 shadow-xl">
                            <figure className="w-[300px] h-[200px]">
                                <img
                                    src={`${route(
                                        "index"
                                    )}/assets/images/arith_calc.jpg`}
                                    alt=""
                                    className="w-[300px] h-[200px]"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Age Calculator</h2>
                                <p>How old are you right now, accurately</p>
                                <div className="card-actions justify-end">
                                    <Link href={route("age-calc")}>
                                        <button className="btn btn-primary">
                                            Go!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[300px] bg-base-100 shadow-xl">
                            <figure className="w-[300px] h-[200px]">
                                <img
                                    src={`${route(
                                        "index"
                                    )}/assets/images/bmi_calc.jpg`}
                                    alt=""
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">BMI Calculator</h2>
                                <p>
                                    Find out your ideal body weight and height
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href={route("bmi-calc")}>
                                        <button className="btn btn-primary">
                                            Go!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
