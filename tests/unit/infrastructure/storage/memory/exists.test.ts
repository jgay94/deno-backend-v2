import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("exists", () => {
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

    it("should return true if an item with the given ID exists", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);

      const exists1 = await storage.exists(testItem1.id);
      const exists2 = await storage.exists(testItem2.id);

      assertEquals(exists1, true);
      assertEquals(exists2, true);
    });

    it("should return false if an item with the given ID does not exist", async () => {
      const exists1 = await storage.exists(testItem1.id);
      const exists2 = await storage.exists(testItem2.id);

      assertEquals(exists1, false);
      assertEquals(exists2, false);
    });
  });
});
