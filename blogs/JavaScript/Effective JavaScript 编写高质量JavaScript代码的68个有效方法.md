---
title: Effective JavaScript 编写高质量JavaScript代码的68个有效方法
date: 2021-05-14
tags:
  - JavaScript
categories:
  - 前端
---

## JavaScript 中的浮点数

大多数编程语言都有几种数值型数据类型，但是 JavaScript 却只有一种。你可以使用 typeof 运算符查看数字的类型。不管是整数还是浮点数，JavaScript 都将它们简单地归类为数字。

```js
typeof 10 // number
typeof 10.1 // number
typeof -10.1 // number 
```

事实上，<font style="color:red">JavaScript中所有的数字都是双精度浮点数</font>。这是由[IEE 754](https://baike.baidu.com/item/IEEE%20754/3869922?fr=aladdin)标准制定的64位编码数字—即 “doubles” 。

那么 JavaScript 是如何表达整数的呢?

请先记住一个概念 : 双精度浮点数能完美地表示高达53位精度的整数,范围大小为 -2^53----2^53 的所有整数都是有效的双精度浮点数

因此，尽管 JavaScript中缺少明显的整数类型，但是完全可以进行整数运算。

大多数的算术运算符可以使用整数、实数或两者的组合进行计算。

```js
console.log(0.1 * 1.9);   // 0.19;
console.log(-10 + 11);    // 1
console.log(20 - 10);     // 10
console.log(5 / 10);      // 0.5
console.log(49 / 7);      // 7
```



然而位算术运算符比较特殊。JavaScript不会直接将操作数作为浮点数进行运算，而是会将其<font style="color:red">隐式地</font>转换为32位整数后进行运算(确切地说，它们被转换为32位大端（big-endian) 的 2 补码表示的整数)



```js
console.log(8 | 1); //9
```

看似简单的表达式实际上需要几个步骤来完成运算

如前文所述，JavaScript 的数字都是双精度浮点数。同时也可以表示为 32 位整数，即 32 位 0、1的序列。

整数 8 为 32 位二进制序列如下

00000000000000000000000000001000

我们也可以用 JavaScript 中数字类型的 toString 方法来查看

```js
// 转成二进制
(8).toString(2) // "1000"
```

整数1表示为32位二进制如下所示：
00000000000000000000000000000001



然后按照相同位只要一个为1即为1 的运算法则，那么结果就是

00000000000000000000000000001001

其结果就是

```js
// 将 1001 看成二进制，返回十进制数
ParseInt("1001",2) // 9
```

所有位运算符的工作方式都是相同的。其操作步骤为 ：

- 将操作数转换为 32 位整数
- 使用整数位模式进行运算
- 将结果转换为标准的 JavaScript 浮点数

一般情况下，JavaScript 引擎需要做一些额外的工作来进行折现转换。

因为数字是以浮点数存储的，必须将其转为整数，然后再转回浮点数。



然后我们在进行浮点数的运算的时候会发现一些不正确的结果

```js
0.1 + 0.2 // 0.30000000000000004
```

尽管64位的精度已经相当高了，但是双精度浮点数也只能表示一组有限的数字，而不能表示所有的实数集。浮点运算只能产生近似的结果，四舍五入到最接近的可表示的实数。

浮点数权衡了精度和性能。当我们关系精度的时候，要小心浮点数的局限性。一个有效的解决办法就是尽可能地采用整数值运算，因为整数在表示时不需要舍入。

### 总结

- JavaScript 的数字都是双精度的浮点数。
- JavaScript中的整数仅仅是双精度浮点数的一个子集，而不是一个单独的数据类型。
- 位运算符将数字视为 32 位的有符号整数。

## 隐式转换

算术运算符 -、*、/ 和 % 在计算之前都会尝试将其参数转换为数字。而算术符 +，既重载了数字相加，又重载了字符串连接操作。



加法运算是左结合律

null 在算术运算中不会导致失败而是隐式地转换为0

一个未定义的变量将被转换为特殊的浮点数值NaN（not a number）

无奈的是，即便是测试NaN值也是异常困难。这有两个原因。

- JavaScript遵循了IEEE浮点数标准令人头痛的要求—NaN不等于其本身

```js
let x = NaN;
x === NaN; //false
```



另外，标准的库函数 isNaN也不是很可靠，因为它带有自己的隐式强制转换，在测试其参数之前，会将参数转换为数字（isNaN函数的一个更精确的名称可能是 coercesToNaN）。如果你已经知道一个值是数字，你可以使用 isNaN函数测试它是否是NaN。

```js
isNaN(NaN); //true
```

但是对于其他绝对不是NaN，但会被强制转换为NaN的值，使用 isNaN方法是无法区分的。

```jsx
console.log(isNaN("刘德华"));           // true
console.log(isNaN(undefined));          // true
console.log(isNaN({}));                 // true
console.log(isNaN({ name: "罗老师" }));  // true
```



最后一种强制转换有时称为真值运算（truthiness）

大多数的 JavaScript值都为真值（truth），也就是能隐式地转换为true，真值运算不会隐式调用任何强制转换方法

JavaScript中有 7 个假值： false、0、-0、”“、NaN、null 和undefined

其他所有的值都为真值。

由于数字和字符串可能为假值，因此，使用真值运算检查函数参数或者对象属性是否已定义不是绝对安全的。



对象也可以被强制转换为原始值。最常见的用法是转换为字符串

```js
console.log("the Math object" + Math); //the Math object[object Math]
console.log("the JSON object" + JSON); //the JSON object[object JSON]
```

对象通过隐式地调用其自身的 toString方法转换为字符串。

```js
console.log(Math.toString());
console.log(JSON.toString());
```

### 总结

- 类型错误可能被隐式的强制转换所隐藏。
- 重载的运算符+是进行加法运算还是字符串连接操作取决于其参数类型。
- 对象通过 valueof方法强制转換为数字，通过 toString方法强制转换为字符串。
- 具有 valueof 方法的对象应该实现 toString方法，返回一个 valueof 方法产生的数字的字符串表示。
- 测试一个值是否为未定义的值，应该使用 typeof 或者与 undefined 进行比较而不是使用真值运算。