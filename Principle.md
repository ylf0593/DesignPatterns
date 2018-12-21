## 多用组合少用继承

## 针对接口编程

## 单一职责（Single Responsibility Principle (SRP)）：
>一个类或一个方法实现单一的功能点，意味着引起它变化的因素少，更容易被复用，从而提高内聚性，降低耦合度。
## 迪米特法则(最少知道法则)
>一个对象对另外一个对象细节知道越少越好，降低模块之间耦合度，反例：ctx.getCon().getOption().getPath()
## 开闭原则（Open/Closed Principle (OCP)）
>对扩展开放，对修改关闭,例子：sort(callback)允许传入自定义的比较算法
## 里氏代换原则（Liskov substitution principle (LSP)）
>子类能够替换父类出现的地方。意味着父类被真正的复用，可以方便的进行子类扩展而不影响到系统正常运行，是开闭原则的补充
## 接口隔离原则（ Interface Segregation Principle (ISP)）
>不同类型功能放在不同接口中，而不是放在一个总接口内。通过搭积木的方式来按需实现，降低耦合。对外部而言也隐藏内部实现细节
## 依赖倒置原则（Dependency Inversion Principle (DIP)）
>高层模块不依赖底层模块，依赖抽象而不依赖实现。针对接口编程，例子：Factory.getProcesser('')，Factory内部可自由切换实现而不影响外部

