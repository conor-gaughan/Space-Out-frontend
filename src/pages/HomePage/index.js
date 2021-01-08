import styled from 'styled-components'
   
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
                        <h1>Rocket 🚀</h1>
                    </section>
                </Section>
                <Section>
                    <section>
                        <h1>Rocket 🚀</h1>
                    </section>
                </Section>
                <Section>
                    <section>
                        <h1>Rocket 🚀</h1>
                    </section>
                </Section>
                <Section>
                    <section>
                        <h1>Rocket 🚀</h1>
                    </section>
                </Section>
            
            </Wrapper>
        </div>
    )
}

export default HomePage