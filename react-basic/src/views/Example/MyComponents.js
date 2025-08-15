import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponents from "./AddComponents";

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
        arrJobs: [
        { id: 'job1', title: 'Developer', salary: '500' },
        { id: 'job2', title: 'Tester', salary: '400' },
        { id: 'job3', title: 'Project Manager', salary: '1000' }
    ]
    }

    addNewJob = (job) => {
        console.log(">>> check job from parent: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]// Spread operator to add new job
        });
    }
    
    deleteAJob = (job) => {
         let currentJobs = this.state.arrJobs;
         //item => item.id !== job.id tức là lọc ra các job mà id không bằng id của job cần xóa
         currentJobs = currentJobs.filter(item => item.id !== job.id); // Filter out the job to be deleted
        this.setState({
            arrJobs: currentJobs // Update the state with the filtered jobs
        })
    }

    render() {

        // let name = "Soupsix";
        console.log(">>> call render: ", this.state);
        
        return (
            <>
                <AddComponents 
                    addNewJob={this.addNewJob}
                />
                <h1>My Components</h1>
                

                <ChildComponents name={'Trường'} age={'Nguyễn'} address={'hanoi'} 
                arrJobs={this.state.arrJobs}  
                deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponents;