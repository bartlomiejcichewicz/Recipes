import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 80%;
    width: 80%;
    margin-top: 2%;
`

const InfoContainer = styled.div`
    flex 1;
    padding: 50px;
`

const Title = styled.h1`
        font-size: 70px;
`

const Desc = styled.p`
        margin: 50px 0px;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 3px;
`

const Button = styled.button`
        padding: 10px;
        font-size: 20px;
        background-color: transparent;
        cursor: pointer;
`

const Slider = () => {
  const handleClick = (direction) => {

  }
    return (
    <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
              <Slide bg="yellow">
              <ImgContainer>
              <Image src="https://www.weightwatchers.com/us/shop/assets-proxy/weight-watchers/image/upload/q_auto/v1/prod/en-us-ec/static-asset/5061030_cb_doneinone_cookbook_open_1200.jpg?auto=webp"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Najlepsze przepisy na ciasta!</Title>
                  <Desc>Sprawd?? ju?? teraz!</Desc>
                  <Button>Zobacz</Button>
              </InfoContainer>
              </Slide>
              <Slide bg="green">
              <ImgContainer>
              <Image src="https://www.weightwatchers.com/us/shop/assets-proxy/weight-watchers/image/upload/q_auto/v1/prod/en-us-ec/static-asset/5061030_cb_doneinone_cookbook_open_1200.jpg?auto=webp"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Najlepsze przepisy na kotlety!</Title>
                  <Desc>Sprawd?? ju?? teraz!</Desc>
                  <Button>Zobacz</Button>
              </InfoContainer>
              </Slide>
              <Slide bg="blue">
              <ImgContainer>
              <Image src="https://www.weightwatchers.com/us/shop/assets-proxy/weight-watchers/image/upload/q_auto/v1/prod/en-us-ec/static-asset/5061030_cb_doneinone_cookbook_open_1200.jpg?auto=webp"/>
              </ImgContainer>
              <InfoContainer>
                  <Title>Najlepsze przepisy na napoje!</Title>
                  <Desc>Sprawd?? ju?? teraz!</Desc>
                  <Button>Zobacz</Button>
              </InfoContainer>
              </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
    </Container>
  )
}

export default Slider