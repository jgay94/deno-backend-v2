import { Id, Identifiable, Storage } from "@infra/storage/mod.ts";
import { Repository } from "./typings.d.ts";

/**
 * BaseRepository is an abstract class that implements the Repository interface.
 * It serves as a base class for repositories and provides CRUD operations for entities
 * that extend the Identifiable interface. This class can be extended
 * by other repository classes to provide domain-specific methods.
 *
 * @template T - The type of the items to be managed, which should extend the Identifiable interface.
 * @implements {Repository<T>} - Implements the Repository interface for the specific item type.
 */
export abstract class BaseRepository<T extends Identifiable> implements Repository<T> {
  /**
   * Constructs a new instance of the BaseRepository class.
   * @param storage - The storage implementation to use for the CRUD operations.
   */
  constructor(protected storage: Storage<T>) {}

  public getAll(): Promise<T[]> {
    return this.storage.getAll();
  }

  public getById(id: Id): Promise<T | null> {
    return this.storage.getById(id);
  }

  public create(item: Omit<T, 'id' | 'createdAt'>): Promise<T> {
    // Use Crypto.randomUUID to generate a new ID
    const id = crypto.randomUUID();
  
    // Get the current date as an ISO string
    const createdAt = new Date().toISOString();
  
    // Assign the generated ID and createdAt to the item object and assert the type
    const newItem = { ...item, id, createdAt } as T;
  
    // Call the storage create method with the new item object
    return this.storage.create(newItem);
  }

  public update(id: Id, item: Partial<T>): Promise<T | null> {
    return this.storage.update(id, item);
  }

  public upsert(item: T): Promise<T> {
    return this.storage.upsert(item);
  }

  public delete(id: Id): Promise<boolean> {
    return this.storage.delete(id);
  }

  public clear(): Promise<void> {
    return this.storage.clear();
  }

  public exists(id: Id): Promise<boolean> {
    return this.storage.exists(id);
  }

  public count(): Promise<number> {
    return this.storage.count();
  }
}
