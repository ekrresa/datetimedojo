import { PORTFOLIO_URL } from '@/helpers/constants'

import DateInputTabs from './components/DateInputTabs'
import Header from './components/Header'
import Lobby from './components/Lobby'

export default function Page() {
  return (
    <section className="flex min-h-svh flex-col relative">
      <Header />

      <main className="pt-12 space-y-10 px-5 relative">
        <div className="absolute h-full w-full border-x -z-10 left-1/2 border-desert-500/20 -translate-x-1/2 max-w-250 mx-auto top-1/2 -translate-y-1/2"></div>
        <div className="max-w-156 mx-auto space-y-4">
          <h1 className="text-center text-4xl md:text-[2.5rem] font-bold text-desert-950 dark:text-desert-100">
            DateTime Dojo
          </h1>
          <p className="w-full text-center text-lg text-desert-900 dark:text-desert-200">
            Transform dates with ease. Enter a date and choose from a variety of formats below.
          </p>
        </div>

        <Lobby>
          <DateInputTabs />
        </Lobby>
      </main>

      <footer className="dark:bg-charcoal mt-auto w-full border-t border-desert-500/20">
        <div className="mx-auto flex max-w-250 items-center justify-center gap-2 text-sm text-desert-600 dark:text-desert-400 px-5 py-4">
          <p className="uppercase"> &copy; {new Date().getFullYear()}</p>

          <p className="flex items-center gap-1 uppercase">
            <a href={PORTFOLIO_URL} target="_blank" rel="noreferrer noopener">
              <span className="mr-1 hidden sm:inline">Developed by</span>
              <span>Ochuko Ekrresa</span>
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}
