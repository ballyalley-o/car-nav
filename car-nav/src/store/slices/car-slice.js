import { createSlice, nanoid } from '@reduxjs/toolkit'
import uuid from 'uuid/v4'

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    // @desc add a Car | action.payload === {name: 'thisCar', cost: 100}
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      })
    },
    // @desc remove a Car | action.payload === {name: 'thisCar', cost: 100}
    removeCar(state, action) {
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload.id
      })
      state.cars = updated
    },
  },
})

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions
export const carReducer = carSlice.reducer
