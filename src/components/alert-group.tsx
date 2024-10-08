/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VYb1i7zOOB2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MailIcon, MoveHorizontalIcon, PhoneIcon } from 'lucide-react'

export function AlertGroup() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6'>
          <a href='#' className='text-muted-foreground'>
            Dashboards
          </a>
          <a href='#' className='font-bold'>
            Alert Groups
          </a>
          <a href='#' className='text-muted-foreground'>
            Alerts
          </a>
          <a href='#' className='text-muted-foreground'>
            Integrations
          </a>
          <a href='#' className='text-muted-foreground'>
            Settings
          </a>
        </nav>
        <div className='flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <Button variant='ghost' size='icon' className='rounded-full ml-auto'>
            <img
              src='/placeholder.svg'
              width='32'
              height='32'
              className='rounded-full border'
              alt='Avatar'
              style={{ aspectRatio: '32/32', objectFit: 'cover' }}
            />
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='max-w-6xl w-full mx-auto grid gap-2'>
          <h1 className='font-semibold text-3xl'>Alert Groups</h1>
        </div>
        <div className='grid gap-6 max-w-6xl w-full mx-auto'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
            <Input
              type='search'
              placeholder='Search alert groups by name, person, or webhook...'
              className='bg-background md:flex-1'
            />
            <Button className='flex-shrink-0 ml-auto'>
              Create Alert Group
            </Button>
          </div>
          <div className='border rounded-lg overflow-hidden grid gap-4 lg:gap-px lg:bg-gray-100 md:hidden'>
            <div className='flex flex-col lg:flex-row bg-background text-sm p-2 relative'>
              <div className='p-2 grid gap-1 flex-1'>
                <div className='font-medium'>Critical Alerts</div>
                <div className='text-muted-foreground'>
                  Notify on all critical alerts
                </div>
              </div>
              <Separator className='my-2 lg:hidden' />
              <div className='p-2 grid gap-1 flex-1'>
                <div className='flex items-start gap-2'>
                  <div className='text-muted-foreground'>
                    <PhoneIcon className='w-4 h-4' /> 123-456-7890
                  </div>
                  <div className='text-muted-foreground'>
                    <MailIcon className='w-4 h-4' /> example@email.com
                  </div>
                </div>
              </div>
              <Separator className='my-2 lg:hidden' />
              <div className='p-2 grid gap-1 flex-1'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <a className='w-4 h-4' /> https://webhook.site/abc123
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-4 right-4'
                  >
                    <MoveHorizontalIcon className='w-4 h-4' />
                    <span className='sr-only'>Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='flex flex-col lg:flex-row bg-background text-sm p-2 relative'>
              <div className='p-2 grid gap-1 flex-1'>
                <div className='font-medium'>Infra Alerts</div>
                <div className='text-muted-foreground'>
                  Notify on all infrastructure alerts
                </div>
              </div>
              <Separator className='my-2 lg:hidden' />
              <div className='p-2 grid gap-1 flex-1'>
                <div className='flex items-start gap-2'>
                  <div className='text-muted-foreground'>
                    <PhoneIcon className='w-4 h-4' /> 987-654-3210
                  </div>
                  <div className='text-muted-foreground'>
                    <MailIcon className='w-4 h-4' /> alerts@company.com
                  </div>
                </div>
              </div>
              <Separator className='my-2 lg:hidden' />
              <div className='p-2 grid gap-1 flex-1'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <a className='w-4 h-4' /> https://webhook.site/def456
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-4 right-4'
                  >
                    <MoveHorizontalIcon className='w-4 h-4' />
                    <span className='sr-only'>Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='hidden md:block border rounded-lg overflow-hidden'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Notifications</TableHead>
                  <TableHead>Webhooks</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Critical Alerts</div>
                    <div className='text-muted-foreground'>
                      Notify on all critical alerts
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-start gap-2'>
                      <div className='text-muted-foreground'>
                        <PhoneIcon className='w-4 h-4' /> 123-456-7890
                      </div>
                      <div className='text-muted-foreground'>
                        <MailIcon className='w-4 h-4' /> example@email.com
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <a className='w-4 h-4' /> https://webhook.site/abc123
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='rounded-full'
                        >
                          <MoveHorizontalIcon className='w-4 h-4' />
                          <span className='sr-only'>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className='font-medium'>Infra Alerts</div>
                    <div className='text-muted-foreground'>
                      Notify on all infrastructure alerts
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-start gap-2'>
                      <div className='text-muted-foreground'>
                        <PhoneIcon className='w-4 h-4' /> 987-654-3210
                      </div>
                      <div className='text-muted-foreground'>
                        <MailIcon className='w-4 h-4' /> alerts@company.com
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <a className='w-4 h-4' /> https://webhook.site/def456
                    </div>
                  </TableCell>
                  <TableCell className='text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='rounded-full'
                        >
                          <MoveHorizontalIcon className='w-4 h-4' />
                          <span className='sr-only'>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}
