import React from 'react'

import Layout from '../components/layout'

const ReleasesPage = () => (
  <Layout>
    <h1>Releases</h1>
    <iframe seamless
      style={{border: 0, width: 400, height: 241}}
      src='https://bandcamp.com/EmbeddedPlayer/album=3974169918/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/'
      title='Astrolabe'
    >
      <a href='http://seapelt.bandcamp.com/album/astrolabe'>Astrolabe by Seapelt</a>
    </iframe>
  </Layout>
)

export default ReleasesPage
