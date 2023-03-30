import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("create", () => {
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

    it("should create and store a new item", async () => {
      const createdItem = await storage.create(testItem1);
      assertEquals(createdItem, testItem1);

      const retrievedItem = await storage.getById(testItem1.id);
      assertEquals(retrievedItem, testItem1);
    });

    it("should not create a duplicate item with the same ID", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);

      const itemCountBeforeCreate = await storage.count();
      const createdItem = await storage.create(testItem1);
      const itemCountAfterCreate = await storage.count();

      assertEquals(createdItem, testItem1);
      assertEquals(itemCountBeforeCreate, itemCountAfterCreate);
    });
  });
});
