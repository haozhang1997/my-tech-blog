---
title: "10 个让你代码更优雅的 TypeScript 技巧"
date: "2026-05-04"
excerpt: "分享 10 个实用的 TypeScript 高级用法，帮助你写出更安全、更可维护的代码。"
tags: ["TypeScript", "前端"]
---

## 1. 用 `satisfies` 替代类型断言

TypeScript 4.9 引入的 `satisfies` 操作符，既保证类型安全，又保留字面量类型推断：

```typescript
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} satisfies Record<string, string | number>;

// config.apiUrl 的类型是 string（不是 string | number）
```

## 2. 善用模板字面量类型

```typescript
type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"
```

## 3. 条件类型实现类型过滤

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Result = NonNullable<string | null | undefined>;
// string
```

## 4. 用 `infer` 提取类型

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type Result = ReturnType<Fn>; // string
```

## 5. 只读元组

```typescript
function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle] as const;
  // 返回类型: readonly [boolean, () => void]
}
```

## 6. 可辨识联合类型

```typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: Error };

function handle(result: Result<string>) {
  if (result.success) {
    console.log(result.data); // TypeScript 知道这里有 data
  } else {
    console.log(result.error); // TypeScript 知道这里有 error
  }
}
```

## 7. 用 `Record` 构建映射类型

```typescript
type Status = "pending" | "active" | "archived";

const statusLabels: Record<Status, string> = {
  pending: "待处理",
  active: "进行中",
  archived: "已归档",
};
```

## 8. 泛型约束

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
getProperty(user, "name"); // OK
getProperty(user, "email"); // Error!
```

## 9. 类型守卫

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // 安全！
  }
}
```

## 10. 用 `Partial` 和 `Required` 灵活组合

```typescript
interface Config {
  host: string;
  port: number;
  debug?: boolean;
}

// 创建时所有字段可选
function createConfig(overrides: Partial<Config>): Required<Config> {
  return {
    host: "localhost",
    port: 3000,
    debug: false,
    ...overrides,
  };
}
```

## 总结

TypeScript 的类型系统非常强大，善用这些技巧能让你的代码更加安全和优雅。关键是在实际项目中多练习，逐步提升类型编程的能力。
