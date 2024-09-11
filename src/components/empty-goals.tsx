import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

import logo from '../assets/in-orbit-logo.svg'
import letsStart from '../assets/lets-start-illustration.svg'

export function EmptyGoals() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-screen">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets start" />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button
          type="button"
          className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 px-4 py-2.5 rounded-lg font-medium text-sm text-violet-50 tracking-tight"
        >
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
