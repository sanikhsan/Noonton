import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInputFloating({
    type = "text",
    isFocused = false,
    ...props
}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer"
            placeholder=" "
            ref={input}
            required
        />
    );
});