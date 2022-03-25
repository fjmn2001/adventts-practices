const getGifts = (letter: string) => {
  const gifts = letter.trim().split(" ")

  return gifts.reduce((acc, curr) => {
    if (!curr.startsWith("_")) {
      acc[curr] = acc[curr] + 1 || 1
    }
    return acc
  }, {} as Record<string, number>)
}

export default getGifts
