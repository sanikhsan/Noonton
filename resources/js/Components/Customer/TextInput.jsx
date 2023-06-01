import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
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
            className={
                'rounded-2xl border-transparent focus:border-transparent focus:ring-0 bg-form-bg py-[13px] px-7 w-full focus:outline-alerange placeholder-gray-400 ' +
                className
            }
            ref={input}
        />
    );
});
