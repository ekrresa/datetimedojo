import * as React from 'react'
import { useInterval } from 'react-timing-hooks'

export default function useCounter() {
  const [counter, setCounter] = React.useState(1)

  const { start, stop } = useInterval(
    () => {
      setCounter(c => c - 1)
    },
    1000,
    { startOnMount: true },
  )

  React.useEffect(() => {
    if (counter === 0) {
      stop()
    }
  }, [counter, stop])

  const startCountdown = React.useCallback(() => {
    setCounter(1)
    start()
  }, [start])

  return {
    counter,
    startCountdown,
  }
}
