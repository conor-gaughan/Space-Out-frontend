import styled from 'styled-components'
import { Link } from 'react-router-dom'
   
function HomePage(props) {

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  `;

  const Section = styled.section`
    margin: 10px;
  `

 
    return (
        <div>
            <Wrapper>
                <Section>
                    <section>
                        <Link to='/rockets'>
                        <h1>Rocket 🚀</h1>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='/crew'>
                        <h1>Crew 🚀</h1>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='/launch'>
                        <h1>Launch 🚀</h1>
                        </Link>
                    </section>
                </Section>
                <Section>
                    <section>
                        <Link to='roadster'>
                        <h1>Roadster 🚀</h1>
                        </Link>
                    </section>
                </Section>
            
            </Wrapper>
        </div>
    )
}

export default HomePage