import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("getAll", () => {
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

    it("should retrieve all items from the storage", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);
      const allItems = await storage.getAll();
      assertEquals(allItems, [testItem1, testItem2]);
    });

    it("should return an empty array if the storage is empty", async () => {
      const allItems = await storage.getAll();
      assertEquals(allItems, []);
    });
  });
});
