"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  value: string
  duration?: number
}

export function Counter({ value, duration = 2000 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(value)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Match first number in string (e.g., "2003", "40", "500", "900")
    const match = value.match(/\d+/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const targetNumber = parseInt(match[0], 10)
    const prefix = value.substring(0, match.index)
    const suffix = value.substring(match.index! + match[0].length)

    // Observer to start animation when visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp: number | null = null

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)

            // Ease out quad animation
            const easeOutProgress = 1 - (1 - progress) * (1 - progress)
            const currentCount = Math.floor(easeOutProgress * targetNumber)

            setDisplayValue(`${prefix}${currentCount}${suffix}`)

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setDisplayValue(value) // ensure exact target value at end
            }
          }

          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.2 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return <span ref={countRef}>{displayValue}</span>
}
