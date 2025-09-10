const Editor = () => {
    return (
        <div className="flex-1 bg-white ml-6 my-4 overflow-hidden">
            <textarea
                className="w-full h-full font-mono text-lg resize-none focus:outline-none"
                placeholder="Start typing here..."
            />
        </div>
    );
};

export default Editor;
