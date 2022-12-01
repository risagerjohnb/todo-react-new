import './App.css';
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="todo-app">
        <TodoList />
        <Footer />
    </div>
  );
}

export default App;
