import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import plugJpeg from '../../../assets/images/plug.jpg'
import plugWebp from '../../../assets/images/plug.webp'
import { Container } from '../../../components/Container'
import { theme } from '../../../style/Theme'
import { Slide } from "react-awesome-reveal";

export const Projects = () => {
    return (
        <StyledProjects id='projects'>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                <Slide triggerOnce style={{width: '100%'}} fraction={1}>
                    <StyledSectionTitle alignSelf='baseline'>Projects</StyledSectionTitle>
                </Slide>
                <StyledGreedWrapperWorks aria-label='Список выполненных работ автора'>
                        <Project
                            srcJpeg={plugJpeg} srcWebp={plugWebp}
                            projectTitle='Project'
                            projectDescr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <Project
                            srcJpeg={plugJpeg} srcWebp={plugWebp}
                            projectTitle='Project'
                            projectDescr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <Project
                            srcJpeg={plugJpeg} srcWebp={plugWebp}
                            projectTitle='Project'
                            projectDescr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                        <Project
                            srcJpeg={plugJpeg} srcWebp={plugWebp}
                            projectTitle='Project'
                            projectDescr='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        />
                    </StyledGreedWrapperWorks>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    padding-top: 100px;
    padding-bottom: 140px;
`

const StyledGreedWrapperWorks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 40px;

    @media ${theme.media.tablet} {
        grid-template-columns: repeat(1, 1fr);
    }
`