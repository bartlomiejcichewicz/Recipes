import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Zaloguj się, aby móc dodawać komentarze do przepisów!</Container>
  )
}

export default Announcement