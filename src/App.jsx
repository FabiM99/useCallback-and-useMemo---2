import { FilteredList } from './FilteredList'


export function App() {
const listItem = [
    { id: 1, name: 'Fabian', age: 24 },
    { id: 2, name: 'Adrian', age: 55 },
    { id: 3, name: 'Marggie', age: 19 },
    { id: 4, name: 'Albert', age: 16 },
] 

return(
  <div>
    <FilteredList list={listItem}/>
  </div>

)
}