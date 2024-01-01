import * as React from 'react'

const noop = () => () => {}

export function ClientOnly({ children }: React.PropsWithChildren<{}>) {
  const value = React.useSyncExternalStore(
    noop,
    () => 'client',
    () => 'server'
  )

  return value === 'client' ? <>{children}</> : null
}
