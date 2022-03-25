import { describe, expect, test } from "vitest"
import getGifts from "../../gifts/getGifts"

describe("countGifts", () => {
  test("should return the number of gifts", () => {
    const letter = "bici coche balón _playstation bici coche peluche"
    const gifts = getGifts(letter)

    expect(gifts).toEqual({
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    })
  })
})
