"use client"

import { useEffect, useState } from 'react'

export function useSuppressHydration() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
} 