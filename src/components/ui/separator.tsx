import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Separator(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={twMerge('bg-zinc-900 h-px', props.className)} />
  )
}
