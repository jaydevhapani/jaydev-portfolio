import { useState, useEffect } from 'react'

export function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentWord = words[wordIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, text.length + 1)
          setText(next)
          if (next === currentWord) {
            setIsPaused(true)
            setTimeout(() => {
              setIsPaused(false)
              setIsDeleting(true)
            }, pause)
          }
        } else {
          const next = currentWord.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, speed, pause, isPaused])

  return text
}
