import { Package } from 'lucide-react'
import s from './page.module.scss'


export default function Home() {
  return (
    <main className='container mx-auto px-4 '>
      <div className='w-10 h-10 bg-cyan-300'>
        <Package/>
      </div>
    </main>
  )
}
