'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const registerFormSchema = z.object({
  name: z.string()
    .min(1, 'Name is required'),

  email: z.string()
    .email('Please enter a valid email address'),

  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]/,
      "Password must contain at least one symbol"),
})


function RegisterForm() {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (
    values: z.infer<typeof registerFormSchema>
  ) => {
    console.log(values)
  }

  return (  
    <div className='w-full px-20'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <h1 className='text-2xl text-center'>
            Register
          </h1>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className='border border-gray-400 hover:border-gray-800 focus:border-primary transitioning'
                    autoComplete='name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className='border border-gray-400 hover:border-gray-800 focus:border-primary transitioning'
                    autoComplete='email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className='border border-gray-400 hover:border-gray-800 focus:border-primary transitioning'
                    type='password'
                    autoComplete='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />  
          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
          <div>
            <p className='text-muted-foreground text-sm text-center'>
              Already have an account?
              <Link
                href={'/?form=login'}
                className='pl-2 uppercase hover:text-primary transitioning'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
 
export default RegisterForm