import React from 'react'
import { useState } from 'react';
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'

function Menu() {
  const [text, setText] = useState('');
  return (
    <div>
      <Header/>
      <Search setText={setText} />
      <Conversations text={text} />
    </div>
  )
}

export default Menu
