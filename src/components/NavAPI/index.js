import styled from 'styled-components'
import styles from './NavAPI.module.css'
import { Link } from 'react-router-dom'
   
function HomePage(props) {

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-grow: 1; */
    /* background-color: red; */
    /* padding: 70px; */
    /* height: 100%; */
    
  `;

  const Section = styled.section`
    /* margin: 10px; */
    border: 2px solid red;
    /* height: 100%; */
    margin: 200px 5px;
    /* margin: 0px; */
    &:hover .hoverTest {
        background-color: yellow;
    }
  `

 
    return (
        <>
            <Wrapper>
                <Section>
                    <section className='hoverTest'>
                        <Link to='/rockets'>
                        <h1>Rocket 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='/crew'>
                        <h1>Crew 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='/launch'>
                        <h1>Launches 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='roadster'>
                        <h1>Roadster 🚀</h1>
                        <p>Content content content</p>
                        </Link>
                    </section>
                </Section>
            
            </Wrapper>
        </>
    )
}

export default HomePage