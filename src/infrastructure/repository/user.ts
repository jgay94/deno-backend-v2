import { IUserRepository, User, UserEmail } from "@domain/user/mod.ts";
import { Storage } from "@infra/storage/mod.ts";

import { BaseRepository } from "./base.ts";

/**
 * UserRepository is a concrete implementation of the UserRepository interface.
 * It extends the BaseRepository class and provides a domain-specific method for getting a user by email.
 *
 * @extends {BaseRepository<User>} - Extends the BaseRepository class with the User type.
 */
export class UserRepository extends BaseRepository<User> implements IUserRepository {
  /**
   * Constructs a new instance of the UserRepository class.
   * @param storage - The storage implementation to use for the CRUD operations.
   */
  constructor(storage: Storage<User>) {
    super(storage);
  }

  async getByEmail(email: UserEmail): Promise<User | null> {
    const allUsers = await this.getAll();
    return allUsers.find((user) => user.email === email) ?? null;
  }
}
