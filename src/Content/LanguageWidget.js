function LanguageWidget({ language }) {
    return (
        <li className="px-3 py-1 mr-2 mb-2 text-teal-300 bg-teal-400/10 flex items-center rounded-full text-sm">
            {language}
        </li>
    );
}

export default LanguageWidget;
