# react基础
<a name="Gx9U3"></a>
### 一、jsx
1. 使用jsx时不用引号括起来，它不是字符串。
1. 只能有一个根元素，标签必须闭合。
1. 只能写js表达式，不能写语句。
1. js混入时，应该用“{js表达式}”
1. class改为className，onclick改为onClick，规律驼峰写法。
1. 标签小写字母开头，找html已有标签，大写开头为组件。
<!-- 1. css内联样式，style={{'key':'value'}}，例如style={{'fontSize':'16px'}} -->
<a name="HDlp8"></a>
### 二、函数式组件和类式组件
<a name="i6pfG"></a>
#### 函数式组件
```javascript
function Dog(){
	return (
  	<div>函数式组件</div>
  )
}
ReactDOM.render(<Dog/,document.getElementById('app'))
```
<a name="wyrWF"></a>
#### 类式组件
```javascript
class Dog extends React.Component{
  constructor(){},
  render(){
  	return (
    	<div>类式组件</div>
    )
  }
}
ReactDOM.render(<Dog/,document.getElementById('app'))
```
<a name="QjlM0"></a>
### 三、组件实例的三大属性state、props、refs
<a name="D5iOp"></a>
#### state
> 定义组件内部的可改变数据，它最好是一个对象。

```javascript
class Dog extends React.Component{
  //初始化state数据
  
  //方式一
	state = {
  	name:'小白',
    age:1
  }
  
  //方式二
  constructor(props){
    //这里需要加super方法来继承父类的一些参数，像props如果不继承的话，可能会出现一些bug。
    super(props)
    this.state = {
    	name:'小白',
      age:1
    }
  }
  ...
}
```
<a name="YW5Sb"></a>
#### props
> 外部传入给组件的不可改数据

```javascript
//方式一
let name = '小白',age = 1;
ReactDOM.render(<Dog name={name} age={age} />,document.getElementById('app'))

//方式二
let info = {
	name:'小白',
  age:1
}
ReactDOM.render(<Dog {...info} />,document.getElementById('app'))

//类式组件 props接收
class Dog extends React.Component{
  constructor(props){
  	super(props)
	}
  render(){
  	return (
      <div>
        <div>name:{this.props.name}</div>
        <div>age:{this.props.age}</div>
      </div>
    )
  }
}

//函数式组件
function Dog(props){
  return (
  	<div>
    	<div>name:{this.props.name}</div>
			<div>age:{this.props.age}</div>
    </div>
  )
}

```
<a name="I422G"></a>
#### refs
> 获取节点元素，勿过度使用。

1. 字符串方式
1. 回调方式
1. 对象方式
```javascript
//方式一 字符串获取DOM不推荐
class Dog extends React.Component{
	render(){
  	return (
      <div>
      	<div>hello react</div>
      	<input ref={titleRef} onChane={e => this.handleChange()} />
      </div>
    	
    )
  }
  handleChange = ()=>{
  	this.refs.titleRef.innerHTML = '你好,世界!'
  }
}

//方式二 回调方式
class Dog extends React.Component{
  constructor(props){
  	super(props)
    this.titleRef = null
  }
	render(){
  	return (
      <div>
      	<div>hello react</div>
      	<input ref={arg => this.titleRef = e} onChane={e => this.handleChange()} />
      </div>
    	
    )
  }
  handleChange = ()=>{
  	this.titleRef.innerHTML = '你好,世界!'
  }
}

//方式三 对象方式 推荐
class Dog extends React.Component{
  constructor(props){
  	super(props)
    this.titleRef = createRef()
  }
	render(){
  	return (
      <div>
      	<div>hello react</div>
      	<input ref={this.titleRef} onChane={e => this.handleChange()} />
      </div>
    	
    )
  }
  handleChange = ()=>{
  	this.titleRef.innerHTML = '你好,世界!'
  }
}
```
<a name="M84pm"></a>
### 四、生命周期
<a name="NMYNP"></a>
#### 一、旧的生命周期

1. componentWillMount          //组件挂载前
1. componentDidMount          // 组件挂在完毕     常用  初始化、ajax等
1. componentWillUnmount     //组件将要卸载	     常用   收尾工作
1. shouldComponentUpdate   //组件是否更新，默认放回true，true为渲染，false则反
1. componentWillUpdate        //组件将要更新
1. componentDidUpdate        //组件更新完毕
1. componentWillReceiveProps    //组件将要接收新的props参数，第一次不会执行，父组件传递给子组件时，能接收props参数 
1. render     //组件渲染  常用

强制更新：this.forceUpdate() <br />数据更新：this.setState()<br />

<a name="m70z4"></a>
#### 二、新的生命周期，废除三个钩子，新增俩个钩子
<a name="asLft"></a>
##### 1. 废弃的三个钩子
> 原因：为什么要废除他们？因为他们被误解和滥用，而且预计在未来的react版本，它们可能会出现bug。
> 过度：如果要使用他们三个，就要加UNSAFE_某某某。
> 易记：即将废弃的三个钩子都有will，除了组件将要卸载的钩子(componentWillUnmount)。

1. componentWillMount  //组件挂载前
1. componentWillUpdate  //组件将要更新
1. componentWillReceiveProps //组件将要接收新的props参数
<a name="k8bHu"></a>
##### 2. 新增俩个钩子

1. getDeriveStateFromProps(props,state)   //获取props派生的状态 需加static 且return一个值，能接收props和state参数。
1. getSnapshotBeforeUpdate  //更新之前获取快照 需要有一个return 快照值或者null
<a name="JusnT"></a>
### 五、flux与redux
