'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address'),

  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]/,
      "Password must contain at least one symbol"),
  
  role: z.string().default('user').optional(),
})


function LoginForm() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      role: 'user'
    }
  })

  const onSubmit = (
    values: z.infer<typeof loginFormSchema>
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
            Login
          </h1>
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
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel className='m-auto mb-4'>Role</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <div className='flex justify-between'>                    
                      <FormItem className='flex items-center gap-3'>
                        <FormControl>
                          <RadioGroupItem value='user' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          User
                        </FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center gap-3'>
                        <FormControl>
                          <RadioGroupItem value='admin' />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          Admin
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
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
              Not registered yet?
              <Link
                href={'/?form=register'}
                className='pl-2 uppercase hover:text-primary transitioning'
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  )
}
 
export default LoginForm