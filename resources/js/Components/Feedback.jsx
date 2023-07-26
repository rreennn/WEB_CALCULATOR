import { router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";


const Feedback = ({ props }) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [feedback, setFeedback] = useState("")
    const [rating, setRating] = useState(0)

    const handleSubmit = () => {
        const data =  {
            name: name,
            feedback: feedback,
            rate: rating
        }
        router.post(route('edit', id), data);
        setName("")
        setFeedback("")
        setRating(0)
    }

    const setStar = (data) => {
        const star = {
            1: "⭐",
            2: "⭐⭐",
            3: "⭐⭐⭐",
            4: "⭐⭐⭐⭐",
            5: "⭐⭐⭐⭐⭐",
        };
        return star[data];
    };

    return (
        <>
            {props.myFeedback
                ? props.feedback.data.map((data, i) => {
                      return (
                          <div
                              className="card w-96 bg-base-100 shadow-xl"
                              key={i}
                          >
                              <div className="card-body">
                                  <h2 className="card-title">{data.name}</h2>
                                  <p>{data.feedback}</p>
                                  <h2>{setStar([data.rate])}</h2>
                              </div>
                              <button
                                  onClick={() => {
                                    axios.post(route('update', data.id)).then((response) => {
                                        setId(response.data.response.id)
                                        setName(response.data.response.name)
                                        setFeedback(response.data.response.feedback)
                                        setRating(response.data.response.rate)
                                    })
                                      window.my_modal_5.showModal();

                                  }}
                                  className="btn btn-sm"
                              >
                                  Edit Feedback
                              </button>
                          </div>
                      );
                  })
                : props.feedback.data.map((data, i) => {
                      return (
                          <div
                              className="card w-96 bg-base-100 shadow-xl"
                              key={i}
                          >
                              <div className="card-body">
                                  <h2 className="card-title">{data.name}</h2>
                                  <p>{data.feedback}</p>
                                  <h2>
                                      <h2>{setStar([data.rate])}</h2>
                                  </h2>
                              </div>
                          </div>
                      );
                  })}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Edit Feedback</h3>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={name}
                                onChange={(name)=>setName(name.target.value)}
                            />
                            <label className="label">
                                <span className="label-text">
                                    Your feedback
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={feedback}
                                onChange={(feedback)=>setFeedback(feedback.target.value)}
                            />
                            <label className="label">
                                <span className="label-text">Your rating</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={rating}
                                onChange={(rating)=>setRating(rating.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="mt-5 btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </form>
            </dialog>
        </>
    );
};
export default Feedback;
