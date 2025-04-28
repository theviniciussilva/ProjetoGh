import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  min-height: 90vh;

  video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -1;
    pointer-events: none; /* impede clique no vídeo */
  }
`
