import { UserDomain } from "../../../src/domain/entities/UserDomain"

describe('User domain', () => {
  it('should name be a string', () => {
    const user = new UserDomain('Renato', 'email', 'senha')

    expect(typeof user.name).toBe('string')
  })

  it('should email be a string', () => {
    const user = new UserDomain('Renato', 'email', 'senha')

    expect(typeof user.email).toBe('string')
  })

  it('should password be a string', () => {
    const user = new UserDomain('Renato', 'email', '1234')

    expect(typeof user.password).toBe('string')
  })

  it('should validateName returns true', () => {
    const user = new UserDomain('Renato', 'email', '1234')

    expect(user.validateName()).toBe(true)
  })

  it('should validateEmail returns true', () => {
    const user = new UserDomain('Renato', 'email', '1234')

    expect(user.validateEmail()).toBe(true)
  })

  it('should validatePassword returns true', () => {
    const user = new UserDomain('Renato', 'email', '1234')

    expect(user.validatePassword()).toBe(true)
  })
})