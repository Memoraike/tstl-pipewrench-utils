declare function instanceOf<T extends object, Type extends abstract new (...args: any) => any>(target: T, type: Type): target is T & InstanceType<Type>;
