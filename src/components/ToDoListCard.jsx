import { List, Switch } from "antd";

export default function ToDoListCard ({ item , setError, setLoading, setTaskList }) {
    const handleSwitch= () => {
        //make a patch request to API 
        setLoading(true)
        const body= { done: !item.done}
        fetch (`http://localhost:4555/tasks/${item.id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                setTaskList(data);
                setError("");
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            }) // using the prop we created in ToDoList to handle our errors
    }
    return (
        <List.Item key={item.id}>
            <List.Item.Meta 
                avatar={<Switch 
                    onChange={() => handleSwitch()}
                    checked={item.done} />}
                title={<p>{item.task}</p>}
            />
        </List.Item>
    )
}