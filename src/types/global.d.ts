/**
 * 把一些必选属性变成可选
 * eg: Optional<IProps, "age" | "nickName">
 * 这里把age和nickName变成可选
 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * 获取Promise里面的类型
 */
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
