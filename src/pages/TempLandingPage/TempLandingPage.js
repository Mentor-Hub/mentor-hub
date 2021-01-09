import React from 'react'
import styled from 'styled-components'
import { MemberSection } from './MemberSection'
import smallLogo from '../../assets/images/logo-small.png'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;

    & > .img-container {
        width: 328px;
        height: 80px;
        position: absolute;
        top: 40px;
        left: calc(50% - 328px/2);
        background: url(${smallLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        /* border: 1px dotted blue; */
    }

    & > p {
        width: 328px;
        height: 48px;
        position: absolute;
        top: 544px;
        left: calc(50% - 328px/2);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #303030;
        /* border: 1px dotted blue; */
    }

    & > h2 {
        width: 328px;
        height: 32px;
        position: absolute;
        top: 592px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;
        /* border: 1px dotted blue; */
    }

    & > .sections-container {
        position: absolute;
        width: 328px;
        top: 624px;
        left: calc(50% - 328px/2);
        /* border: 2px solid pink; */
    }

    & > .figma-container {
        box-sizing: border-box;
        width: 100%;
        height: 400px;
        position: absolute;
        top: 144px;
        /* left: calc(50% - 328px/2); */
        /* border: 1px dashed purple; */

        & > .iframe {
            width: 100%;
            height: 100%;
        }
    }
`

export default function TempLandingPage() {
    return (
        <PageContainer>
            <div className={'img-container'}></div>

            <div className={'figma-container'}>
                <iframe border='none' outline='none' width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy8tQlMEGSe5cRnD8PVX5sm%2FHack-A-Thon%3Fnode-id%3D0%253A1" allowFullscreen></iframe>
            {/* <iframe width="328" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYFLVfiHgyfTNccBB7l8Red%2FVet-Fest-Views%3Fnode-id%3D1265%253A164" allowFullscreen></iframe> */}
            {/* <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYFLVfiHgyfTNccBB7l8Red%2FVet-Fest-Views%3Fnode-id%3D1704%253A45667" allowFullscreen></iframe> */}
            {/* <iframe style={{border: `1px solid orange`, width: `100%`, height: `100%`}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYFLVfiHgyfTNccBB7l8Red%2FVet-Fest-Views%3Fnode-id%3D652%253A4983" allowFullscreen></iframe> */}
                {/* <iframe className={'iframe'} title={'figmaEmbed'} style={{border: '1px solid #303030', width: `100%`}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy8tQlMEGSe5cRnD8PVX5sm%2FHack-A-Thon%3Fnode-id%3D19%253A2185" allowFullscreen></iframe> */}
            </div>

            <p>{'Check back soon...'}</p>
            <h2>{'The team'}</h2>
            <div className={'sections-container'}>
                <MemberSection
                    name={'Veer Singh'}
                    branch={'USMC'}
                    role={'Developer'}
                    linkedIn={`https://www.linkedin.com/in/veerkaran-singh-45b4a9190/`}
                    github={`https://github.com/V3RS`}
                    portfolio={'http://www.google.com'}
                    objName={'veer'}
                />

                <MemberSection
                    name={'Dan Engel'}
                    branch={'Navy'}
                    role={'Developer'}
                    linkedIn={'https://www.linkedin.com/in/daniel-engel-b85b6957/'}
                    github={'https://github.com/djengel96'}
                    portfolio={'http://www.yahoo.com'}
                    objName={'dan'}
                />

                <MemberSection
                    name={'Michael Stedman'}
                    branch={'Army'}
                    role={'UX Designer & Developer'}
                    linkedIn={'https://www.linkedin.com/in/stedman/'}
                    github={`https://github.com/recondesigns`}
                    portfolio={'https://stedman-ux-developer.netlify.app/'}
                    objName={'stedman'}
                />
            </div>
        </PageContainer>
    )
}