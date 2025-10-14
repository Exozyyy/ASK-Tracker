import React from 'react'
import { createEvent, createStore } from 'effector'

const increment = createEvent()
const $count = createStore(0).on(increment, (state) => state + 1)

const App: React.FC = () => {
	const [count, setCount] = React.useState($count.getState())

	React.useEffect(() => {
		const unsubscribe = $count.watch(setCount)
		return () => unsubscribe()
	}, [])

	return (
		<div>
			<h1>Effector Counter 🚀</h1>
			<p>Текущее значение: {count}</p>
			<button onClick={() => increment()}>Увеличить</button>
		</div>
	)
}

export default App
