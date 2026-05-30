import { useState } from "react"
import { shortenUrl } from "@/services/shorten.service"

export function useShortenUrl() {
  const [loading, setLoading] = useState(false)

  const shorten = async (url: string) => {
    try {
      setLoading(true)

      const result = await shortenUrl(url)

      return result
    } finally {
      setLoading(false)
    }
  }

  return {
    shorten,
    loading,
  }
}