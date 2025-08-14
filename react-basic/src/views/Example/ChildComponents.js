import React from "react";

class ChildComponents  extends React.Component {

    /*
        JSX return code block
        <></>: là short cut của React.Fragment, dùng để nhóm các phần tử lại với nhau mà không tạo ra thẻ HTML mới.
        State: là một đối tượng lưu trữ dữ liệu của component, có thể thay đổi trong quá trình hoạt động của ứng dụng.
        Hiểu đơn giản State thay đổi giá trị sẽ làm cho component render lại, và hiển thị giá trị mới.

        keyword this: gọi lại chính nó trong class để truy cập vào các thuộc tính & methods của class. 
        Ví dụ: muốn gọi lại các object, method trong class thì dùng keyword this.
        */

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleOnClickSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form
        console.log(">>> check state: ", this.state);
        alert("Submit button clicked");
    }

    render() {

        // let name = "Soupsix";
        console.log(">>> call render: ", this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        
        //Object destructuring
        let { name, age, address, arrJobs } = this.props; // Destructuring props

        return (
            <>
                <div>This is child: {name} - Age: {age} - Address: {address}</div>
                <div className="job-list">
                    {arrJobs.map((item, index) => (
                        <li key={item.id}>
                            <span>{item.id} - {item.title} - {item.salary}</span>
                        </li>
                    )) }
                </div>
            </>
        );
    }
}

export default ChildComponents;