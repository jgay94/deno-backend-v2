# deno-backend-v2
 A Deno backend featuring a domain model, storage, repositories, and services.

## Project Structure
```
src/
├── main.ts
├── domain/
│   └── user/
│       ├── mod.ts
│       ├── entity.ts
│       └── typings.d.ts
├── infrastructure/
│   ├── repository/
│   │   ├── mod.ts
│   │   ├── base.ts
│   │   ├── user.ts
│   │   └── typings.d.ts
│   └── storage/
│       ├── mod.ts
│       ├── filesystem.ts
│       ├── memory.ts
│       └── typings.d.ts
```