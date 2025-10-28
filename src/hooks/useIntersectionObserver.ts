import { useEffect, useState, RefObject } from 'react'

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)

    // Cleanup function using React 19's automatic ref callback cleanup
    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isIntersecting
}
