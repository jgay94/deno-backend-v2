import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("getById", () => {
    let storage: MemoryStorage<TestItem>;

    const testItem1: TestItem = {
      id: "1",
      name: "Item 1",
    };

    const testItem2: TestItem = {
      id: "2",
      name: "Item 2",
    };

    beforeEach(() => {
      storage = new MemoryStorage<TestItem>();
    });

    it("should retrieve an item by its ID", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);
      const retrievedItem = await storage.getById("1");
      assertEquals(retrievedItem, testItem1);
    });

    it("should return null if an item with the given ID is not found", async () => {
      const retrievedItem = await storage.getById("non-existent-id");
      assertEquals(retrievedItem, null);
    });
  });
});
