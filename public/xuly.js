var UserComponent = React.createClass({
    layThongTin: function(){
        alert(this.props.children);
    },
    render: function () {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.ho} - {this.props.children}</h1>
                <button onClick={()=>{getName(this.props.ho)}}>Detail</button>
            </div>
        )
    }
})

function getName(ten){
    alert(ten);
}

var ClassComponent = React.createClass({
    render: function () {
        return (
            <h3>hehehihi</h3>
        )
    }
});


ReactDOM.render(
    <div>
        <UserComponent ten="Hai" ho="Tran" >dep chai</UserComponent>
    </div>,

    document.getElementById("root"));