import Feedback from "@/Components/Feedback";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard(props) {
    console.log(props);
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState("");
    const [isNotif, setIsNotif] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = () => {
        const data = {
            name,
            feedback,
            rating,
        };

        router.post(route("store"), data);
        setIsNotif(true);
        setTimeout(() => {
            setIsNotif(false);
        }, 2000);
    };

    return (
        <>
            <Head title="Feedbacks" />
            <Navbar />
            {isNotif && (
                <div className="alert alert-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{props.flash.message}</span>
                </div>
            )}
            <div className="container h-[85vh] flex justify-evenly items-center">
                <div className="form-wrapper w-[300px] bg-slate-200 rounded-md shadow-md p-2 form-control px-4">
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(name) => setName(name.target.value)}
                        value={name}
                    />
                    <label className="label">
                        <span className="label-text">Your feedback</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(feedback) =>
                            setFeedback(feedback.target.value)
                        }
                        value={feedback}
                    />
                    <label className="label">
                        <span className="label-text">Your rating</span>
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(rating) => setRating(rating.target.value)}
                        value={rating}
                    />
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="btn btn-md btn-neutral my-4 w-[100px]"
                            onClick={() => handleSubmit()}
                        >
                            Submit!
                        </button>
                        <button
                            type="submit"
                            className="btn btn-md btn-neutral my-4 w-[100px]"
                            onClick={() => router.post(route("logout"))}
                        >
                            Logout
                        </button>
                    </div>
                </div>
                <div className="feedback">
                    <div className="flex justify-evenly mb-1">
                        <button
                            onClick={() => {
                                router.get(route("dashboard"));
                            }}
                            className="btn btn-sm"
                        >
                            All Feedbacks
                        </button>
                        <button
                            onClick={() => {
                                router.get(
                                    route("my-feedback", props.auth.user.email)
                                );
                            }}
                            className="btn btn-sm"
                        >
                            My Feedback
                        </button>
                    </div>
                    <div className="w-[420px] h-[350px] overflow-x-hidden overflow-y-scroll px-2">
                        <div className="flex flex-col gap-4">
                            {
                                <Feedback props={props} />
                                // axios.get(route("my-feedback", props.auth.user.email)).then((response)=>{
                                //     <Feedback props={response.data.feedback.data} />
                                // })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
