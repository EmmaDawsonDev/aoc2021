// const data = `NNCB

// CH -> B
// HH -> N
// CB -> H
// NH -> C
// HB -> C
// HC -> B
// HN -> C
// NN -> C
// BH -> H
// NC -> B
// NB -> B
// BN -> B
// BB -> N
// BC -> B
// CC -> N
// CN -> C`

const data = `VPPHOPVVSFSVFOCOSBKF

CO -> B
CV -> N
HV -> H
ON -> O
FS -> F
NS -> S
VK -> C
BV -> F
SC -> N
NV -> V
NC -> F
NH -> B
BO -> K
FC -> H
NB -> H
HO -> F
SB -> N
KP -> V
OS -> C
OB -> P
SH -> N
BC -> H
CK -> H
SO -> N
SP -> P
CF -> P
KV -> F
CS -> V
FF -> P
VS -> V
CP -> S
PH -> V
OP -> K
KH -> B
FB -> S
CN -> H
KS -> P
FN -> O
PV -> O
VC -> S
HF -> N
OC -> O
PK -> V
KC -> C
HK -> C
PO -> N
OO -> S
VH -> N
CC -> K
BP -> K
HC -> K
FV -> K
KF -> V
VF -> C
HN -> S
VP -> B
HH -> O
FO -> O
PC -> N
KK -> C
PN -> P
NN -> C
FH -> N
VV -> O
OK -> V
CB -> N
SN -> H
VO -> H
BB -> C
PB -> F
NF -> P
KO -> S
PP -> K
NO -> O
SF -> N
KN -> S
PS -> O
VN -> V
SS -> N
BF -> O
HP -> H
HS -> N
BS -> S
VB -> F
PF -> K
SV -> V
BH -> P
FP -> O
CH -> P
OH -> K
OF -> F
HB -> V
FK -> V
BN -> V
SK -> F
OV -> C
NP -> S
NK -> S
BK -> C
KB -> F`

const dataArr = data.split('\n\n')
let polymerTemplate = dataArr[0]
const pairInsertion = dataArr[1].split('\n')

for (let i = 0; i < 10; i++) {
  let newTemplate = ''
  for (let j = 0; j < polymerTemplate.length - 1; j++) {
    for (let k = 0; k < pairInsertion.length; k++) {
      let insertionArr = pairInsertion[k].split(' -> ')
      let pair = insertionArr[0]
      let insertLetter = insertionArr[1]

      if (pair === polymerTemplate[j] + polymerTemplate[j + 1] && newTemplate.length === 0) {
        newTemplate = newTemplate + polymerTemplate[j] + insertLetter + polymerTemplate[j + 1]
      } else if (pair === polymerTemplate[j] + polymerTemplate[j + 1]) {
        newTemplate = newTemplate + insertLetter + polymerTemplate[j + 1]
      }
    }
  }
  polymerTemplate = newTemplate
}

const polymerTemplateHash = {}

for (let letter of polymerTemplate) {
  if (polymerTemplateHash[letter]) {
    polymerTemplateHash[letter]++
  } else {
    polymerTemplateHash[letter] = 1
  }
}

const values = Object.values(polymerTemplateHash)
const max = Math.max(...values)
const min = Math.min(...values)

console.log(max - min) // Part 1: 2233
