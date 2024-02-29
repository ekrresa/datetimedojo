import * as React from 'react'

const emptySubscribe = () => () => {}

export function useIsMounted() {
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  return isMounted
}
