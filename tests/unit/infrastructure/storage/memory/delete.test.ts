import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("delete", () => {
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

    it("should delete an item by its ID", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);

      const deleted = await storage.delete(testItem1.id);
      assertEquals(deleted, true);

      const remainingItems = await storage.getAll();
      assertEquals(remainingItems, [testItem2]);
    });

    it("should return false if an item with the specified ID does not exist", async () => {
      const deleted = await storage.delete(testItem1.id);
      assertEquals(deleted, false);
    });
  });
});
