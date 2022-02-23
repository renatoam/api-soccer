export interface Mapper<T> {
  toDomain(raw: any): T
  toPersistence(entity: T): any
  toDTO(entity: T): Record<string, any>
}