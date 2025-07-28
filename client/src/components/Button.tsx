
const Button = ({name} : {name: string}) => {
    return (
        <button className="cursor-pointer border-b-4 border-green-700 text-white bg-green-600 hover:bg-green-700 transition-all duration-200 px-8 py-2 mt-2 w-full rounded-md">{name}</button>
    );
};

export default Button;