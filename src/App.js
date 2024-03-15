import Content from "./Content";
import NavColumn from "./NavColumn";

function App() {
    return (
        <div
            id="container"
            className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
        >
            <div
                id="container"
                className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex"
            >
                <div className="mb-4 md:h-full md:sticky md:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <NavColumn />
                </div>
                <div className="lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default App;
