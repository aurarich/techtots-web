'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <main>
            <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  )
}