import { Club } from "../../../src/domain/entities/Club"

const clubMock: any = {
  id: "1",
  name: 'Renato',
  foundation: "1920",
  country: "Brazil",
  history: "Blablablabla"
}

describe('Club domain', () => {
  it('should name be truthy', () => {
    const club = new Club(clubMock)

    expect(!!club.name).toBe(true)
  })
  
  it('should name type be string', () => {
    const club = new Club(clubMock)

    expect(typeof club.name).toBe('string')
  })
})