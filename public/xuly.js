var UserComponent = React.createClass({
    layThongTin: function () {
        alert(this.props.children);
    },
    getInitialState() {
        return { age: parseInt(this.props.tuoi) };
    },
    addStudent() {
        this.state.age = this.state.age + 1;
        this.setState(this.state);
    },
    render: function () {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.ho} - {this.props.children}</h1>
                <h2>{this.state.age}</h2>
                <button onClick={() => {
                    var str = this.props.ho + this.props.ten + this.props.children;
                    getName(str);
                }}>
                    Detail
                </button>
                <button onClick={this.addStudent}>Increase</button>
            </div>
        )
    }
})

function getName(ten) {
    alert(ten);
}

var ClassComponent = React.createClass({
    render: function () {
        return (
            <h3>hehehihi</h3>
        )
    }
});

var InputTag = React.createClass({
    show() {
        var text = this.refs.sl;
        alert(text);
    },
    render() {
        return (
            <div>
                <select ref="sl">
                    <option value ="a">AAA</option>
                    <option value ="b">BBB</option>
                    <option value ="c">CCC</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={this.show}>Hien thi</button>
            </div>
        )
    }
})


ReactDOM.render(
    <div>
        <InputTag />
        <UserComponent ten="Hai" ho="Tran" tuoi="100">dep chai</UserComponent>
    </div>,

    document.getElementById("root"));