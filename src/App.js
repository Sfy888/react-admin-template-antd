import logo from "./logo.svg";
import "./App.css";
import AdminPanel from "./views/AdminPanel";
import LoginForm from "./views/LoginForm";
import Product from "./views/Product";
import ClickComponent from "./views/OnClick";
import { MyApp } from "./views/OnClick";
import TableTest from "./views/TableTest";
import Gallery from "./views/Gallery.js";
import Avatar from "./views/Avatar";

const isLoggendIn = false;
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
function IsComponent() {
  let content;
  if (isLoggendIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  return <div>{content}</div>;
}

function Card({children}) {
  console.log('这个是children', children)
  return (
    <div className="card">
      {children}
    </div>
  )
}
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
let guest = 0
function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  console.log('哈哈哈', guest)
  return <h2>Tea cup for guest #{guest}</h2>;
}

export function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IsComponent />
        <Product products={products} />
        <ClickComponent />
        <MyApp />
        <TableTest />
        <Gallery />
        <article>
          <h1>My First Component</h1>
          <ol>
            <li>Components: UI Building Blocks</li>
            <li>Defining a Component</li>
            <li>Using a Component</li>
          </ol>
        </article>
        <Card>
        hello world
          <Avatar size={100} person={{name: '张三', imageId: 'YfeOqp2'}} />
        </Card>
        <hr></hr>
        <TeaSet />
      </header>
    </div>
  );
}

export default App;
