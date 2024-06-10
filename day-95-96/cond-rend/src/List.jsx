export function ToDoList({ arr }) {

    return (
        <ul style={{listStyleType: 'none'}}>
        { 
            arr.map( ({ name, status, id }) => (
                    <li key={id}> {status ? '✅' :'⏳'} {name} </li>
                )
            ) 
        }
        </ul>
    )

    // const a-b-c = 
}