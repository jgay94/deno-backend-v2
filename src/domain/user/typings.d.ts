import { Identifiable } from "@infra/storage/mod.ts";
import { Repository } from "@infra/repository/mod.ts";

/**
 * User interface representing a user in the system.
 * @extends {Identifiable} - Extends the Identifiable interface to include an id property.
 */
export interface User extends Identifiable {
  /**
   * The first name of the user.
   */
  firstName: string;

  /**
   * The last name of the user.
   */
  lastName: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The hashed password of the user.
   */
  password: string;

  /**
   * Indicates whether the user account is active.
   */
  isActive: boolean;

  /**
   * The date when the user was created.
   */
  createdAt: Date;

  /**
   * The date when the user was last updated, if any.
   */
  updatedAt?: Date;
}

/**
 * UserEmail type alias represents the email property of the User interface.
 * It provides a convenient and type-safe way to refer to the email type within the domain.
 */
export type UserEmail = User["email"];

/**
 * UserRepository interface represents a repository implementation specifically for User objects.
 * @extends {Repository<User>} - Extends the Repository interface with the User type.
 */
export interface IUserRepository extends Repository<User> {
  /**
   * Gets a user by their email address.
   * @param email - The email address of the user to retrieve.
   * @returns A promise that resolves to the user with the specified email address or null if not found.
   */
  getByEmail(email: UserEmail): Promise<User | null>;
}
