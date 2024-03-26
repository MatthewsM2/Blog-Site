import './App.css';

function NavBar()
{
  return (
    <div className='nav-container'>
      <h3>Lab App</h3>
  <ul className='nav-body'>
    <li className='nav-icons'>Home</li>
    <li className='nav-icons'>Blog</li>
    <li className='nav-icons'>Sign in</li>
  </ul>
  </div>
  );
}

export default function App() {
  return (
    <div className="App">
        <NavBar/>
    </div>
  );
}

// export default App;
