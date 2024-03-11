// discriminated union is an advanced form of union type

type numbers = 1 | 2 | string | number;

type AccountCreationMessage = 
 | { kind: "ok"; greeting: string}
 | { kind: "passwordComplexityFailure"; message: string }
 | { kind: "userNameExists"; }

//   here each member of the union is an object
//  here dicriminator is a property called kind

const ok: AccountCreationMessage = { kind: "ok", greeting: "hello" }