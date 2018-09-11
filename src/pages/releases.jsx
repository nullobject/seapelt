import React from 'react'

import Layout from '../components/layout'

const ReleasesPage = () => (
  <Layout>
    <h2>Releases</h2>
    <iframe seamless
      style={{border: 0, width: '100%', height: '120px'}}
      src='https://bandcamp.com/EmbeddedPlayer/album=3974169918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/'
      title='Astrolabe'
    >
      <a href='http://seapelt.bandcamp.com/album/astrolabe'>Astrolabe by Seapelt</a>
    </iframe>
  </Layout>
)

export default ReleasesPage
