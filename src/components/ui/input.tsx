import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'border-zinc-900 hover:border-zinc-800 focus-visible:border-pink-500 bg-black px-4 border rounded-lg ring-pink-500/10 focus-visible:ring-4 h-12 text-sm outline-none placeholder-zinc-400',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
