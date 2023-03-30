import { Identifiable, Storage } from "@infra/storage/mod.ts";

/**
 * Repository interface defines a generic repository with CRUD operations for handling
 * entities that extend the Identifiable interface.
 *
 * @template T - The type of the items to be managed, which should extend the Identifiable interface.
 * @extends {Storage<T>} - Extends the Storage interface for the specific item type.
 */
export interface Repository<T extends Identifiable> extends Storage<T> {}
