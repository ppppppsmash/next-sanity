import Header from '@/app/search/Header'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>peiの<Website></Website></title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
