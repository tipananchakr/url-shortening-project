export async function shortenUrl(url: string) {
  const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
  )

  if (!response.ok) {
    throw new Error("Failed to shorten URL")
  }

  const shortUrl = await response.text()

  return {
    result_url: shortUrl,
  }
}