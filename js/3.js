function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child() {
    Parent.call(this, 'fjq');
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.construtor = Child;


let child1 = new Child();

console.log(Child.prototype)


//403 服务器拒绝访问
//500服务器内部错误
//301 永久重定向
//302 临时重定向
// https：tls


//当new Vue时，使用defindeproperty监听data的数据，vue挂载的时候实例一个Watcher，将dep.target指向自己，执行渲染函数
//触发监听的get方法，有这个值的时候将收集这个watcher，最后将dep.target置空
//值改变时，触发notify 函数，


//网站的文件和资源进行优化
//1、文件合并，文件压缩 2、cnd托管 3、缓存使用（多个域名来提供缓存）
//（浏览器并发请求数目限制是针对域名的，对于静态资源可以是用不同的一级域名提升并行请求数目）

//计算属性，一开始读到{{}}里的数据时，此时是渲染watcher，