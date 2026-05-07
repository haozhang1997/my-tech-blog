---
title: "深入理解 React Hooks 的工作原理"
date: "2026-05-05"
excerpt: "从源码层面剖析 useState、useEffect 的实现机制，理解 Hooks 规则背后的设计思想。"
tags: ["React", "前端"]
---

## 前言

React Hooks 自 16.8 发布以来，已经成为 React 开发的主流范式。但你是否真正理解它们背后的工作原理？

今天我们从源码层面来看看 Hooks 是如何运行的。

## useState 的本质

`useState` 并不是什么魔法，它本质上是一个**链表节点**。每个组件实例维护一个 Hooks 链表，每次渲染时按顺序遍历。

```javascript
// 简化的 useState 实现
let hookIndex = 0;
let hooks = [];

function useState(initialValue) {
  const index = hookIndex;
  
  if (hooks[index] === undefined) {
    hooks[index] = initialValue;
  }
  
  const setState = (newValue) => {
    hooks[index] = newValue;
    rerender();
  };
  
  hookIndex++;
  return [hooks[index], setState];
}
```

这就是为什么 **Hooks 不能在条件语句中调用** — 链表的顺序必须保持一致。

## useEffect 的执行时机

`useEffect` 的回调并不是在渲染期间执行的，而是在浏览器完成绘制之后异步执行。

执行流程：

1. 组件渲染，生成虚拟 DOM
2. React 更新真实 DOM
3. 浏览器绘制屏幕
4. React 执行 `useEffect` 回调

> 如果你需要在绘制前同步执行副作用，使用 `useLayoutEffect`。

## 闭包陷阱

这是最常见的 Hooks 问题：

```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      // 这里的 count 永远是 0！
      console.log(count);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
}
```

解决方案是使用 `useRef` 或函数式更新：

```javascript
setCount(prev => prev + 1);
```

## 总结

理解 Hooks 的底层机制，能帮助我们写出更健壮的 React 代码。记住三条核心规则：

1. 只在函数组件顶层调用 Hooks
2. 只在 React 函数中调用 Hooks
3. 始终正确声明依赖数组
