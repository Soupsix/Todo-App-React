import React, { useState } from "react"; 

// class ChildComponents extends React.Component {

//     /*
//         JSX return code block
//         <></>: là short cut của React.Fragment, dùng để nhóm các phần tử lại với nhau mà không tạo ra thẻ HTML mới.
//         State: là một đối tượng lưu trữ dữ liệu của component, có thể thay đổi trong quá trình hoạt động của ứng dụng.
//         Hiểu đơn giản State thay đổi giá trị sẽ làm cho component render lại, và hiển thị giá trị mới.

//         keyword this: gọi lại chính nó trong class để truy cập vào các thuộc tính & methods của class. 
//         Ví dụ: muốn gọi lại các object, method trong class thì dùng keyword this.
//         */


//     state = {
//         showJobs: false
//     }

//     handleShowHide = () => {
//         this.setState({
//             showJobs: !this.state.showJobs // Toggle the value of showJobs
//         })
//     }

//     render() {

//         //Object destructuring
//         let { arrJobs } = this.props // Destructuring props
//         let { showJobs } = this.state; // Destructuring state
//         let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
//         console.log(">>> check showJobs: ", check);

//         return (
//             <>

//                 {showJobs === false ? <div>
//                     <button onClick={() => this.handleShowHide()}>Show</button>
//                 </div>
//                     :
//                     <>
//                         <div className="job-list">
//                             {arrJobs.map((item, index) => (
//                                 <li key={item.id}>
//                                     <span>{item.id} - {item.title} - {item.salary}</span>
//                                 </li>
//                             ))}
//                         </div>
//                         <div>
//                             <button onClick={() => this.handleShowHide()}>Hide</button>
//                         </div>
//                     </>
//                 }

//             </>
//         );
//     }
// }


//Functional component version with props & state & destructuring
// const ChildComponents = (props) => {

//     //Object destructuring
//     let { name, age, address, arrJobs } = props; // Destructuring props

//     return (
//         <>
//             <div className="job-list">
//                 <div>This is child: {name} - Age: {age} - Address: {address}</div>
//                 {arrJobs.map((item, index) => {
//                     if(+item.salary > 500) {
//                         return (
//                             <li key={item.id}>
//                                 <span>{item.id} - {item.title} - {item.salary}</span>
//                             </li>
//                         )
//                     }
//                 })}
//             </div>
//         </>
//     )
// }

//Functional component version for hide and show jobs
const ChildComponents = (props) => {

    let { arrJobs, deleteAJob} = props; // Destructuring props
    const [showJobs, setShowJobs] = useState(false);
    

    const handleShowHide = () => {
        setShowJobs(!showJobs); // Toggle the value of showJobs
    }

    const handleOnClickDelete = (job) => {
        console.log(">>> check delete job: ", job);
        // Logic to delete the job can be added here
        deleteAJob(job);
         // Call the deleteJob function passed from parent
    }

    return (
        <>
            {
                showJobs === false ?
                    <div>
                        <button onClick={handleShowHide}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {arrJobs.map((item, index) => (
                                <li key={item.id}>
                                    <span>
                                        {item.id} - {item.title} - {item.salary} 
                                        <button style={{backgroundColor: "green"}}
                                        onClick={() => handleOnClickDelete(item)}
                                        > x </button>
                                    </span>
                                </li>
                            ))}
                        </div>
                        <div>
                            <button onClick={handleShowHide}>Hide</button>
                        </div>
                    </>
            }
        </>
    )

}

export default ChildComponents;