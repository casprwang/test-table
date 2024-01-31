import { faker } from '@faker-js/faker'

export type Person = {
  firstName: string
  lastName: string
  visits: number
  bid: number
  ask: number
  progress: number
  price: number
  status: 'filled' | 'pending'
  subRows?: Person[]
  quantity: number
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: faker.company.name().substring(0, 4).toUpperCase(),
    lastName: faker.person.lastName().substring(0, 4),
    price: faker.number.float(100),
    quantity: faker.number.int(100),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    bid: faker.number.int(100),
    ask: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>(['filled', 'pending'])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const len = lens[0]!
  return range(len).map(() => {
    return {
      ...newPerson(),
    }
  })
}
