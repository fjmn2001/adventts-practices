interface Sheep {
  name: string
  color: string
}

export const countSheeps = (sheep: Sheep[]) => {
  return sheep.filter(
    (sheep) =>
      sheep.color === "rojo" &&
      sheep.name.toLowerCase().includes("n") &&
      sheep.name.toLowerCase().includes("a")
  )
}
