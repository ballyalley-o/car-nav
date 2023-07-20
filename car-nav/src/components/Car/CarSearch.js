import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../../store'
// styles
import { StyledCarBanner } from '../../assets/styles/car-form-styles'
//  components
import FormField from '../Form/FormField'
import { toast } from 'react-toastify'

function CarSearch() {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state) => state.cars)

  const handleSearchTermChange = (e) => {
    e.preventDefault()
    dispatch(changeSearchTerm(e.target.value))
  }
  return (
    <div className='list-header'>
      <h3 className='title is-3is-flex is-justify-content-center is-align-items-center bold'>
        Car Search
      </h3>
      <div className='search field is-horizontal'>
        <div className='label'> Search</div>
        <input
          className='input'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch
