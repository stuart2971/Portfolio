function TableOfContentsItem({ label, isActive, destination, setActiveTab }) {
    function onClick() {
        setActiveTab(label);
        document.getElementById(label).scrollIntoView({ behavior: "smooth" });
    }
    return (
        <p
            className={`mb-4 ${
                isActive ? "text-white" : ""
            } cursor-pointer hover:text-white`}
            onClick={onClick}
        >
            <span className="mr-4">───{isActive ? "─────" : ""}</span>{" "}
            <a href={destination}>{label.toUpperCase()}</a>
        </p>
    );
}

export default TableOfContentsItem;
