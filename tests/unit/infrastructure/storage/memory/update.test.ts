import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("update", () => {
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

    it("should update an existing item", async () => {
      await storage.create(testItem1);

      const updatedItemData: Partial<TestItem> = {
        name: "Updated Item 1",
      };

      const updatedItem = await storage.update(testItem1.id, updatedItemData);
      assertEquals(updatedItem, { ...testItem1, ...updatedItemData });
    });

    it("should return null if the item does not exist", async () => {
      const updatedItemData: Partial<TestItem> = {
        name: "Updated Item 2",
      };

      const updatedItem = await storage.update(testItem2.id, updatedItemData);
      assertEquals(updatedItem, null);
    });

    it("should not update the storage if the item does not exist", async () => {
      const updatedItemData: Partial<TestItem> = {
        name: "Updated Item 2",
      };

      await storage.update(testItem2.id, updatedItemData);
      const allItems = await storage.getAll();
      assertEquals(allItems, []);
    });
  });
});
