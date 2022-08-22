import { useDispatch} from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Container, Label, Input } from './FilterByName.styled';

const FilterByName = () => {
  // получает ссылку на функцию для отправки действий
  const dispatch = useDispatch();

  // читает данные из state.filter(store) и подписывается на их обновление
  // const value = useSelector(state => state.filter.value)
  // console.log("value", value)


   // записывает в filter(store) вводимые в input(FilterByName) данные 
   const handleFilter = (event) => {
    // отправляет action setFilter со значением value
    dispatch(setFilter(event.target.value))
  };


    return(<Container><Label>Find contact by Name
      <Input type="text" onChange={handleFilter} />
    </Label></Container>)
}


export default FilterByName;









// import { useDispatch} from 'react-redux';
// import { setFilter } from 'redux/filterSlice';
// import { Container, Label, Input } from './FilterByName.styled';

// const FilterByName = () => {
//   // получает ссылку на функцию для отправки действий
//   const dispatch = useDispatch();

//   // читает данные из state.filter(store) и подписывается на их обновление
//   // const value = useSelector(state => state.filter.value)
//   // console.log("value", value)


//    // записывает в filter(store) вводимые в input(FilterByName) данные 
//    const handleFilter = (event) => {
//     // отправляет action setFilter со значением value
//     dispatch(setFilter(event.target.value))
//   };


//     return(<Container><Label>Find contact by Name
//       <Input type="text" onChange={handleFilter} />
//     </Label></Container>)
// }


// export default FilterByName;