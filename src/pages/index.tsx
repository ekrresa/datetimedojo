import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex min-h-svh flex-col items-center px-5 pt-24">
      <h1 className="text-4xl font-semibold text-gray-800">Date-Time Dojo</h1>
      <p className="mt-4 w-full max-w-[40rem] text-balance text-center text-lg text-gray-700">
        A solution for converting dates into different formats. Choose a date and explore a variety
        of formats instantly.
      </p>
    </section>
  )
}
