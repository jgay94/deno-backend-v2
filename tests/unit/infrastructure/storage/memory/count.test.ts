import { beforeEach, describe, it } from "@std/testing/bdd.ts";
import { assertEquals } from "@std/testing/asserts.ts";

import { MemoryStorage } from "@infra/storage/mod.ts";
import { TestItem } from "@tests/utils.ts";

describe("MemoryStorage", () => {
  describe("count", () => {
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

    it("should return the correct count of items in the storage", async () => {
      await storage.create(testItem1);
      await storage.create(testItem2);

      const count = await storage.count();
      assertEquals(count, 2);
    });

    it("should return 0 if the storage is empty", async () => {
      const count = await storage.count();
      assertEquals(count, 0);
    });
  });
});
