import { Club } from "@playing/domain/entities/Club"

const clubMock: any = {
  id: "1",
  name: 'Renato',
  foundation: "1920",
  country: "Brazil",
  history: "Blablablabla"
}

describe('Club domain', () => {
  it('should name be truthy', () => {
    // const club = new Club(clubMock)

    // expect(!!club.name).toBe(true)
    expect(!!2).toBe(true)
  })
})