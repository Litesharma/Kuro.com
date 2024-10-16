import { useState } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { Button } from './components/Button';
import { ButtonEdit } from './components/ButtonEdit';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isScheduled, setIsScheduled] = useState(false);
  const [showNewTodo, setShowNewTodo] = useState(false); // State for showing new to-do container

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false, isChecked: false }]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDel = (id) => {
    const newTodos = todos.filter(e => e.id !== id);
    setTodos(newTodos);
  };

  const handleSchedule = () => {
    setIsScheduled(!isScheduled);
    setShowNewTodo(!showNewTodo); // Toggle new to-do container visibility
  };

  const handleCheckboxChange = (id) => {
    const newTodos = todos.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setTodos(newTodos);
  };

  return (
    <div className='bg-[#FFD6FF] h-screen w-full font-fav'>
      <Navbar />
      <div>
        <img className='z-10 relative h-[24rem] ml-[36rem] rounded-full mt-[-209px]' src="../public/cartoon_2.png" alt="Cartoon" />
      </div>
      <div>
        <img className='h-[250px] mt-[-13rem] rounded-full' src="../public/pot.png" alt="Pot" />
      </div>
      <div>
        <img className='h-[250px] ml-[79rem] mt-[-15rem] rounded-full' src="../public/pot.png" alt="Pot" />
      </div>
      <div className="all_to_do">
        <div className="body h-[64vh] static backdrop-blur-xl bg-white/30 w-[45%] ml-[25.5rem] mt-[-8.6rem] shadow-lg rounded-3xl">
          <div className="main flex flex-col gap-3 pt-[5rem] pl-[8rem]">
            <div className="flex gap-8">
              <input
                onChange={handleChange}
                value={todo}
                className='px-20 font-semibold py-2 bg-[#f8f8f8] rounded-full placeholder-gray-500 focus:bg-[#f5e6ff] focus:outline-[#b7b7b7]'
                type="text"
                placeholder='Add to do here'
              />
              <div className="pt-[6px]">
                <Button name={"Add"} onClick={handleAdd} />
              </div>
            </div>
          </div>
          <div className="your_to_does flex flex-col gap-9 pt-8 pr-[31px] pl-[90px]">
            <div className="text h-[230px] bg-[#f8f8f8] w-[33vw] ml-4 rounded-2xl shadow-lg overflow-y-scroll">
              {todos.length === 0 ? (
                <p className='font-bold text-center mt-4'>No tasks available</p>
              ) : (
                todos.map(item => (
                  <div className='flex px-[12px] py-[15px] gap-4' key={item.id}>
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="mr-2"
                    />
                    <div className={`w-[500px] break-all ${item.isChecked ? 'bg-[#d3f9d8]' : 'bg-[#f5ecc3]'} hover p-2 rounded-lg shadow-md`}>
                      {item.todo}
                    </div>
                    <div className='flex gap-4'>
                      <ButtonEdit name={"Del"} onClick={() => handleDel(item.id)} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
