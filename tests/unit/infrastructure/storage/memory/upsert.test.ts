import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("upsert", () => {
    let storage: MemoryStorage<TestItem>;

    const testItem1: TestItem = {
      id: "1",
      name: "Item 1",
    };

    beforeEach(() => {
      storage = new MemoryStorage<TestItem>();
    });

    it("should insert a new item if it doesn't exist", async () => {
      const upsertedItem = await storage.upsert(testItem1);
      assertEquals(upsertedItem, testItem1);

      const allItems = await storage.getAll();
      assertEquals(allItems, [testItem1]);
    });

    it("should update an existing item if it exists", async () => {
      await storage.create(testItem1);

      const updatedItemData: Partial<TestItem> = {
        name: "Updated Item 1",
      };

      const upsertedItem = await storage.upsert({
        ...testItem1,
        ...updatedItemData,
      });
      assertEquals(upsertedItem, { ...testItem1, ...updatedItemData });

      const allItems = await storage.getAll();
      assertEquals(allItems, [{ ...testItem1, ...updatedItemData }]);
    });
  });
});
