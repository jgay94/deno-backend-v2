import { Identifiable } from "@infra/storage/mod.ts";

export interface TestItem extends Identifiable {
  name: string;
}
