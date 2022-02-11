function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

interface ValueObjectProps {
  [index: string]: any;
}

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structrual property.
 */

export abstract class ValueObject<T extends ValueObjectProps> {
  public readonly props: T;

  constructor (props: T) {
    this.props = Object.freeze(props);
  }

  public equals (vo?: ValueObject<T>) : boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }
    return shallowEqual(this.props, vo.props)
  }
}