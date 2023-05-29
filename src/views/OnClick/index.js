import { useState } from 'react';

export default function ClickComponent() {
    function onClick() {
        alert('点击了按钮')
    }
    return (
        <button onClick={onClick}>按钮</button>
    )
}


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function MyButton1({ count, onClick }) {
    return (<p><button onClick={onClick}>hello<span>{count}</span></button></p>)
}
export function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton1 count={count} onClick={handleClick} />
      <MyButton1 count={count} onClick={handleClick} />
      <MyButton1 count={count} onClick={handleClick} />
    </div>
  );
}
