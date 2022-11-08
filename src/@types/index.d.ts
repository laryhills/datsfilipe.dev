// declaring svg file types as modules to avoid ts errors
declare module '*.svg' {
  const src: string
  export default src
}
