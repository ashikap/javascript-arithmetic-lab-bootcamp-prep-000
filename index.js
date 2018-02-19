function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function inc (a) { 
  return (a + 1)
}

function dec (a) { 
  return (a - 1)
}

function makeInt (a) {
  return (a)
}

function assumes base 10 (0) {
  return (0)
}

it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

