var r = new RegExp(
  '^' +
  '(0|[1-9]\\d*)' + // major
  '\\.(0|[1-9]\\d*)' + // minor
  '\\.(0|[1-9]\\d*)' + // patch
  '(?:-' + // start prerelease
    '(' + // capture
      '(?:' + // first identifier
        '0|' + // 0, or
        '[1-9]\\d*|' + // numeric identifier, or
        '\\d*[a-zA-Z-][a-zA-Z0-9-]*' + // id with at least one non-number
      ')' + // end first identifier
      '(?:\\.' + // dot-separated
        '(?:0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*)' + // identifier
      ')*' + // zero or more of those
    ')' + // end prerelease capture
  ')?' + // prerelease is optional
  '(?:' + // build tag (non-capturing)
    '\\+[0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*' + // pretty much anything goes
  ')?' + // build tag is optional
  '$'
)

console.log(r.toString())

t=[
  '1.2.3',
  '1.2.3-a.b',
  '1.2.3-a.0.b',
  '1.2.0-a.0b.c',
  '1.2.0-aaa.bbb.b00.c-d0999.9a',
  '1.2.3-0000.d',
  '1.2.3-9.a',
  '1.02.03',
  '0.0.0-0+0',
  '1.2.3-a0000b.b00000.00000c.9.10+andthenthishappened23'
]

t.forEach(function(t) {
  var m = t.match(r)
  if (m) m = [m[1], m[2], m[3], m[4]]
  console.log(t, m || 'INVALID')
})
