import PropTypes from 'prop-types';
import { Container, Label, Input } from './FilterByName.styled';

const FilterByName =({value, onChange})=>{
    return(<Container><Label>Find contact by Name
      <Input type="text" value={value} onChange={onChange} />
    </Label></Container>)
}


FilterByName.propTypes ={
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FilterByName;