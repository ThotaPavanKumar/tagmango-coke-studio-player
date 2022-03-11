
import React from 'react'

export const Songs = ({data}) => {
    const {song,url,artists,cover_image} = data;
  return (
    <div>{song}</div>
  )
}


