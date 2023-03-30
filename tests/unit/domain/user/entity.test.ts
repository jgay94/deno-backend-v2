import { afterEach, beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals, assertStringIncludes } from "@std/testing/asserts.ts";

import { UserEntity } from "@domain/user/mod.ts";

describe("UserEntity", () => {
  let testUser: UserEntity | undefined;

  beforeEach(() => {
    testUser = new UserEntity({
      id: "test-id",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "hashed-password",
      isActive: true,
      createdAt: new Date("2023-03-29T10:20:30Z"),
      updatedAt: new Date("2023-03-29T11:20:30Z"),
    });
  });

  afterEach(() => {
    testUser = undefined;
  });

  it("should properly create a UserEntity instance", () => {
    assertEquals(testUser!.id, "test-id");
    assertEquals(testUser!.firstName, "John");
    assertEquals(testUser!.lastName, "Doe");
    assertEquals(testUser!.email, "john.doe@example.com");
    assertEquals(testUser!.password, "hashed-password");
    assertEquals(testUser!.isActive, true);
    assertEquals(testUser!.createdAt, new Date("2023-03-29T10:20:30Z"));
    assertEquals(testUser!.updatedAt, new Date("2023-03-29T11:20:30Z"));
  });

  it("should return the full name of the user", () => {
    const fullName = testUser!.fullName;
    assertStringIncludes(fullName, "John Doe");
  });

  it("should return the initials of the user's first and last name", () => {
    const initials = testUser!.initials;
    assertStringIncludes(initials, "JD");
  });
});
