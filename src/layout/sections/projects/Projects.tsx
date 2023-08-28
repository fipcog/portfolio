import React from 'react'
import styled from 'styled-components'
import { StyledSectionTitle } from '../../../components/sectiontitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import plugJpeg from '../../../assets/images/plug.jpg'
import plugWebp from '../../../assets/images/plug.webp'
import { Container } from '../../../components/Container'

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction='column' justify='center' align='center'>
                    <StyledSectionTitle alignSelf='baseline'>Projects</StyledSectionTitle>
                    <FlexWrapper wrap='wrap' justify='baseline' gap='60px 40px' aria-label='Список выполненных работ автора'>
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
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    padding-top: 100px;
    padding-bottom: 140px;
`