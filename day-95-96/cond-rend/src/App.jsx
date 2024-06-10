import { ToDoList } from './List'

function App() {

  const arr = [
    { name: 'Mobile Bill', status:1, id:1  },
    { name: 'Groceries Refill', status:0, id:2  },
    { name: 'Bike Servicing', status:0, id:3  },
    { name: 'Hitting Gym', status:1, id:4  },
    { name: 'Reading Book', status:0, id:5  },
  ]

  const isOk = null

  const selectSection = () => {
    if(isOk) {
      return (
        <section>
          <h1>
            Android Phone
          </h1>
        </section>
      )
    } 
    return (
      <section>
        <h1>
          Apple Phone
        </h1>
      </section>
    )
  }

  return (
    <>
     { isOk ? (
          <h1> Android Phone </h1>
        ) : (
          <h1>Apple Phone</h1>
        ) 
      }
      {
        isOk && ( <h1> Android Phone </h1> )
      }
      {
        !isOk && ( <h1> Apple Phone </h1> )
      }
      <div>
        <ToDoList arr={arr}></ToDoList>
      </div>
    </>
  )
}

export default App
