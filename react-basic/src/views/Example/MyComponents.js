import React from "react";

class MyComponents extends React.Component {

    /*
        JSX return code block
        <></>: là short cut của React.Fragment, dùng để nhóm các phần tử lại với nhau mà không tạo ra thẻ HTML mới.
        State: là một đối tượng lưu trữ dữ liệu của component, có thể thay đổi trong quá trình hoạt động của ứng dụng.
        Hiểu đơn giản State thay đổi giá trị sẽ làm cho component render lại, và hiển thị giá trị mới.

        keyword this: gọi lại chính nó trong class để truy cập vào các thuộc tính & methods của class. 
        Ví dụ: muốn gọi lại các object, method trong class thì dùng keyword this.
        */

    state = {
        name: "Soupsix",
        age: 18,
        address: "Hà Nội"
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleOnClickButton = () => {
        alert("Hello " + this.state.name);
    }

  render() {

    // let name = "Soupsix";

    return (
      <div className="my-components">
        <input value={this.state.name} type="text"
        onChange={(event) => this.handleOnChangeName(event)
        }/>
        <h1 className="first">My Components by {this.state.name}</h1>
        <p className="second">This is a custom component: {this.state.age} years old, from {this.state.address}</p>
        <div className="third">
            <button onClick={() => this.handleOnClickButton()}>
                Click me!
            </button>
        </div>
      </div>
    );
  }
}

export default MyComponents;