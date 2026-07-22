'use client'

import React, { useEffect, useRef, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)
  const [isHoveringButton, setIsHoveringButton] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${e.clientX}px`
        outlineRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn-gold') ||
        target.classList.contains('btn-outline') ||
        target.classList.contains('interactive')
      ) {
        setIsHoveringButton(true)
        if (outlineRef.current) {
          outlineRef.current.classList.add('active')
        }
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.classList.contains('btn-gold') ||
        target.classList.contains('btn-outline') ||
        target.classList.contains('interactive')
      ) {
        setIsHoveringButton(false)
        if (outlineRef.current) {
          outlineRef.current.classList.remove('active')
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
