import { applyPatches, calculatePatch, diff } from "./src";
import TypeIt from "typeit";

let inputEl: HTMLTextAreaElement = document.getElementById('input') as HTMLTextAreaElement
let outputEl: HTMLTextAreaElement  = document.getElementById('output') as HTMLTextAreaElement
let input = `import { describe, expect, it } from 'vitest'
import { one } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})
`;

let output = `import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('one', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
`
inputEl.value = input
outputEl.value = output

inputEl.addEventListener('input', () => {
    input = inputEl.value
})
outputEl.addEventListener('input', () => {
    output = outputEl.value
})

function starter() {
  // @ts-expect-error ok
  new TypeIt("#typing", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("Nvver", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("e")
    .move(null, { to: "END" })
    .type(" let yees")
    .pause(300)
    .delete(2)
    .type("sterday use up to muc")
    .move(-4)
    .type("o")
    .move(null, { to: "END" })
    .type("h of today.")
    .pause(500)
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type("<em>- Will Rogers</em>")
    .go();
}
