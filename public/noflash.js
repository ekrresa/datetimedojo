// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

;(function () {
  // Change these if you use something different in your hook.
  const storageKey = 'app-theme'
  const classNameDark = 'dark'
  const root = window.document.documentElement

  function setClassOnDocumentBody(darkMode) {
    if (darkMode === 'dark') {
      root.classList.add(classNameDark)
    } else {
      root.classList.remove(classNameDark)
    }
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mql.media === preferDarkQuery
  let localStorageTheme = null

  // Let the browser know what preference we have
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}

  const localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = localStorageTheme
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody('dark')
    localStorage.setItem(storageKey, 'dark')
  } else {
    // source of truth from root
    const isDarkMode = root.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})()
