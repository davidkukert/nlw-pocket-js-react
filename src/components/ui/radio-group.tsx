import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CheckCircle2, Circle } from 'lucide-react'

export function RadioGroup(props: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.RadioGroup
      {...props}
      className="flex flex-col gap-2"
    />
  )
}

export function RadioGroupItem(props: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className="flex justify-between items-center border-zinc-900 data-[state=checked]:border-pink-500 hover:border-zinc-800 focus-visible:border-pink-500 bg-black data-[state=checked]:bg-pink-500/5 px-4 py-2.5 border rounded-lg ring-pink-500/10 focus-visible:ring-4 group outline-none"
    />
  )
}

export function RadioGroupIndicator() {
  return (
    <>
      <Circle className="group-data-[state=checked]:hidden text-zinc-600 size-4" />
      <CheckCircle2 className="group-data-[state=checked]:inline hidden text-pink-500 size-4" />
    </>
  )
}
