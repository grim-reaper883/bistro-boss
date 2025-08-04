

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center mb-12 md:mb-16 px-4">
            <div className="max-w-2xl mx-auto">
                <p className="text-yellow-500 mb-4 text-sm md:text-base font-medium">---{subHeading}---</p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase border-y-4 py-6 font-bold">{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;