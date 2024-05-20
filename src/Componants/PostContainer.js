import React, { Component } from 'react'
import Post from './Post'
export default class PostContainer extends Component {
  render() {
    return (
      <div className='col-12 card shadow-lg '>
 <h3 className='card-header p-3'>Popular Posts</h3>
 <div className='card-body p-0'>

    <ul className='list-group'>
    <Post src={'https://www.w3schools.com/w3images/workshop.jpg'} name="Lorem" des="Sed mattis nunc" />

<Post src={'https://www.w3schools.com/w3images/gondol.jpg'} name="Ipsum"  des="Praes tinci sed
" />
<Post src={'https://www.w3schools.com/w3images/skies.jpg'} name="Dorum" ddes="Ultricies congue" />
<Post src={'https://www.w3schools.com/w3images/rock.jpg'} name="Mingsum"
des="Lorem ipsum dipsum"  /> </ul>
</div>
 </div>


    )
  }
}


