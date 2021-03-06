import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function index() {
  return (
    <header className='header'>
      <div className='logo'>
        <span className='color-diff'>On</span>
        <span className='color-difference'>share</span>
      </div>
      <div className='share-button'>
        <Link
          to='/create_user_name'
          style={{ color: '#fff', textDecoration: 'none' }}
        >
          <Button variant='contained' color='primary'>
            Share Files
          </Button>
        </Link>
      </div>
    </header>
  )
}
