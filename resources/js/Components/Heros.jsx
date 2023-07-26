
const Heros = () => {
    return (
        <>
            <div
                className="hero min-h-[90vh]"
                style={{ backgroundImage:`url('http://localhost:8000/assets/images/background.jpg')` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Need a Little Help in Counting?</h1>
                        <p className="mb-5">
                            Simple Calculator Web can help you with a simple math!
                            For your need of simple calculations, BMI, and many more
                            calculator!
                        </p>
                        <a href="#about-section"><button className="btn btn-primary">Get Started</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Heros;
