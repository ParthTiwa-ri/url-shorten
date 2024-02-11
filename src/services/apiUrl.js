export async function shortenUrl(longUrl) {
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(longUrl)}`,
    });
    const data = await response.json();
    if (response.ok) {
      return data.result_url;
    } else {
      throw new Error(data.error || "Failed to shorten URL");
    }
  } catch (error) {
    throw new Error("An error occurred while shortening the URL");
  }
}
