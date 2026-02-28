import { Button } from '@/components/ui/button'
import { GiAbstract051 } from 'react-icons/gi'

const HomePage = () => {
  return (  
    <div className='flex flex-col'>
      <div className='px-10 py-5 flex justify-between items-center bg-primary'>
        <h1 className='logo-text text-3xl text-white'>Sagna</h1>
        <Button variant='light'>Login</Button>
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
    </div>
  )
}

export default HomePage
