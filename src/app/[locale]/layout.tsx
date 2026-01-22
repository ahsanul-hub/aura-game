import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '../../i18n/routing'
import '../globals.css'
import { Navigation } from '../../components/Navigation'
import { Footer } from '../../components/Footer/Footer'
import { ThemeProvider } from '../../components/ThemeProvider'
import QueryProvider from '../../providers/query-provider'

import { Toaster } from 'sonner'

export const metadata = {
  title: 'Pakar Gaming',
  description: 'Platform terpercaya untuk membeli game digital',
  icons: {
    icon: '/logo.png',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/50 dark:via-purple-900/50 to-background">
                <Navigation />
                <main>
                  {children}
                  <Toaster position="top-center" richColors closeButton expand />
                </main>
                <Footer />
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
