import { describe, expect, test } from "vitest"
import { countSheeps } from "../../sheep/countSheeps"

describe("Testing countSheep", () => {
  const sheeps = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ]

  test("it should return a valid value", () => {
    const filteredSheep = countSheeps(sheeps)

    expect(filteredSheep).toEqual([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ])
  })
})
