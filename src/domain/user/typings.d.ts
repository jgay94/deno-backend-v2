import { Identifiable } from "@infra/storage/mod.ts";

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
