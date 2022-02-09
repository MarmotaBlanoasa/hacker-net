import './index.css';
import Header from './components/Header';
import { useState } from 'react/cjs/react.development';
import HackerPosts from './components/HackerPosts'; 

function App() {
  const [query, setQuery] = useState('')
  const [fullQuery, setFullQuery] = useState('')
  function handleSubmit(e){
    setFullQuery(query)
    e.preventDefault();
  }
  function handleChange(e){
    const searchTerm = e.target.value
    setQuery(searchTerm)
  }
console.log(fullQuery)
  return (
    <div>
      <Header />
      <center><form className='search-bar' onSubmit={handleSubmit}>
          <input type='text' className='input-search' placeholder='Search...' onChange={handleChange}/>
        </form></center>
        {!fullQuery && <center><h1 className='empty-search'>Search some news</h1></center>}
        {fullQuery && <HackerPosts/>}
    </div>
  );
}

export default App;
