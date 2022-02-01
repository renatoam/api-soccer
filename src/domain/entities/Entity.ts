// import { UniqueEntityID } from './types';

// to criando uma classe fake só pra não dar erro, criar certo depois
class UniqueEntityID {
  equals(id: string | UniqueEntityID) {
    return !!id
  }
}

// "param is Type" significa que se o retorno for verdadeiro, então 'param' é do tipo 'Type'
// Por exemplo: function (v: string | number): v is string {}.
// Aqui, o TS está dizendo que tudo bem esse parametro receber dois tipos, mas caso o retorno da função seja verdadeiro, significa que 'v' é string.
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// Isso quer dizer que se 'v' for verdadeiro, então ele é uma 'Entity<any>'
const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

// Classe abstrata não pode ser instanciada, mas pode ser estendida, que é o objetivo aqui.
export abstract class Entity<T> {
  // o id é readonly, porque uma vez instanciado, não pode ser alterado
  protected readonly _id: UniqueEntityID;
  protected props: T;

  // Take note of this particular nuance here:
  // Why is "id" optional?
  constructor (props: T, id?: UniqueEntityID) {
    this._id = id ? id : new UniqueEntityID();
    this.props = props;
  }

  // Entities are compared based on their referential
  // equality.
  public equals (object?: Entity<T>) : boolean {

    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}