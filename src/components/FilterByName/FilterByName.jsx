// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container, Label, Input } from './FilterByName.styled';

const FilterByName = ({ onChange }) => {
  const value = useSelector(state => state.filter.value)
  console.log("value", value);
    return(<Container><Label>Find contact by Name
      <Input type="text" onChange={onChange} />
    </Label></Container>)
}


// FilterByName.propTypes ={
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// }

export default FilterByName;