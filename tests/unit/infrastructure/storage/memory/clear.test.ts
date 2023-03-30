import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("clear", () => {
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

    it("should clear all items from the storage", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);

      await storage.clear();

      const allItems = await storage.getAll();
      assertEquals(allItems, []);
    });

    it("should do nothing if the storage is already empty", async () => {
      await storage.clear();

      const allItems = await storage.getAll();
      assertEquals(allItems, []);
    });
  });
});
