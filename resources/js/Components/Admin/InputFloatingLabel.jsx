export default function InputFloatingLabel({
    value,
    children,
    ...props
}) {
    return (
    <label
        {...props}
        className="absolute text-sm text-orange-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
        {value ? value : children}
    </label>
    );
}