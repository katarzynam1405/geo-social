import people from './people'
import './style.scss'

const root = document.querySelector('#root')
root.innerHTML = `<p>There are ${people.length} people.</p>`