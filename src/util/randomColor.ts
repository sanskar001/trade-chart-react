export function randomColor(): string {
  return `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(
    Math.random() * 255
  )},${Math.trunc(Math.random() * 255)})`;
}
