//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string|number)[]

type guitarist = {
    name?: string,
    active: boolean,
    album:stringOrNumber
}

type UserId = stringOrNumber

//literal Types

let myName: 'Dave'

let userName:'Dave' | 'John' | 'Amy'

userName= 'Amy'