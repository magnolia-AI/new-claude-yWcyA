import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
  title: 'SaaSify - Transform Your Business Today',
  description: 'The most powerful SaaS platform to streamline your workflow, boost productivity, and scale your business to new heights. Join thousands of happy customers worldwide.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


