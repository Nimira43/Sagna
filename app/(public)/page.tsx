'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useState } from 'react'
import { GiAbstract051 } from 'react-icons/gi'
import RegisterForm from './_components/register-form'
import LoginForm from './_components/login-form'
import { useSearchParams } from 'next/navigation'

const HomePage = () => {
  const [openSheet, setOpenSheet] = useState(false)
  const queryStrings = useSearchParams()
  const form = queryStrings.get('form')

  return (  
    <div className='flex flex-col'>
      <div className='px-10 py-5 flex justify-between items-center bg-primary'>
        <h1 className='logo-text text-3xl text-white'>Sagna</h1>
        <Button
          onClick={() => setOpenSheet(true)}
          variant='light'
        >
          Login
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 h-[80vh] items-center px-10'>
        <div className='flex justify-center items-center md:order-last mt-10 md:mt-0'>
          <GiAbstract051 className='text-[250px] text-primary animate-float' />
        </div>
        <div className='flex flex-col items-center text-center gap-6'>
          <h1 className='text-5xl font-bold leading-tight'>
            Book Movies Fast and Effortlessly
          </h1>
          <p className='text-lg text-muted-foreground leading-relaxed max-w-125'>
            Sagna makes movie nights simple. Browse showtimes, secure seats, and book tickets in seconds with a smooth, intuitive experience designed for speed, clarity, and pure cinema excitement.
          </p>
          <Button size='lg' className='w-fit mb-10 md:mb-0'>
            Get Started
          </Button>
        </div>
      </div>
      <Sheet
        open={openSheet}
        onOpenChange={(open) => setOpenSheet(open)}
      >
        <SheetContent className='min-w-125'>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <div className='flex flex-col items-center justify-center h-screen'>
              {form === 'register'
                ? <RegisterForm />
                : <LoginForm />
              }
            </div>
          </SheetHeader>

        </SheetContent>
      </Sheet>
    </div>
  )
}

export default HomePage
