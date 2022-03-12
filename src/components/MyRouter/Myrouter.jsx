
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Main/Main'
import { SongDetails } from '../SongDetails/SongDetails'

export const Myrouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/songdetails" element={<SongDetails />}></Route>
        </Routes>
    </div>
  )
}

