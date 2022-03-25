import { describe, expect, it, test } from "vitest"
import { GildedRose, Item } from "../../gilde-rose-kata"

describe("Testing gilde rose", () => {
  test("it should be 0", () => {
    const item = new Item("foo", 1, 1)
    const _GildedRose = new GildedRose([item])
    const items = _GildedRose.updateQuality()

    expect(items[0].quality).toBe(0)
  })

  test("it should be 0", () => {
    const item = new Item("special", 1, 2)
    const _GildedRose = new GildedRose([item])
    const items = _GildedRose.updateQuality()

    expect(items[0].quality).toBe(0)
  })
})
