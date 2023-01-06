import React, { forwardRef } from 'react'
import styled from 'styled-components';



const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-4 py-2',
        large: 'px-8 py-3 text-lg'
    },
    variant: {
        primary: 'bg-transparent hover:bg-[#051619] text-[#051619] font-semibold hover:text-white py-2 px-4 border border-[#051619] hover:border-transparent rounded',
        secondary: 'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
        danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
        main:'bg-transparent hover:bg-[#051619] text-[#051619] font-semibold hover:text-white py-2 px-4 border border-[#051619] hover:border-transparent rounded'
    }
}

export const cls = (input) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond) => typeof cond === "string")
        .join(" ")
        .trim();

export const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            disabled = false,
            onClick,
            ...props
        }, ref
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            onClick = {onClick}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ));

    export const Line = (props)=>{
        console.log('line', props.color)
        return(
        <div className="hidden sm:block" aria-hidden="true">
            <div className="px-3 pt-2 w-full" >
                <div className={`border-b border-[${props.color}]`}/>
            </div>
        </div>
        )
    }


    export const Beacon = () =>{
        return (
          <div className="absolute -mt-12 -ml-12 -mt-12 rounded-full bg-green-700 w-4 h-4 animate-ping"></div>
        )
      }

    export const Switch = (props)=>{


        return (

           <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" checked={props.checked} className="sr-only peer"  onChange={props.onChange}/>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700  dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
          </label>

        )
    }



