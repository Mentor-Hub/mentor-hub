import React from 'react'
import styled from 'styled-components'
import { MemberSection } from './MemberSection'
import smallLogo from '../../assets/images/logo-small.png'

const PageContainer = styled.div`
    box-sizing: border-box;
    padding: 40px 0px 0px 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .img-container {
        box-sizing: border-box;
        min-width: 328px;
        min-height: 80px;
        background: url(${smallLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        @media (min-width: 768px) {
            width: 528px;
        }
    }

    & > p {
        box-sizing: border-box;
        margin: 24px 0px 0px 0px;
        width: 328px;
        min-height: 72px;
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

        @media (min-width: 768px) {
            width: 528px;
            font-size: 16px;
        }
    }

    & > iframe {
        box-sizing: border-box;
        margin: 24px 0px 0px 0px;
        width: 352px;
        min-height: 280px;
        border: none;

        @media (min-width: 768px) {
            width: 720px;
            min-height: 400px;
        }
    }

    & > h2 {
        box-sizing: border-box;
        margin: 40px 0px 40px 0px;
        width: 328px;
        height: 32px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;

        @media (min-width: 768px) {
            width: 528px;
        }
    }

    & > .sections-wrapper {
        box-sizing: border-box;
        margin: 0px 0px 0px 0px;
        width: 328px;
        height: auto;

        @media (min-width: 768px) {
            padding: 0px 0px 40px 0px;
            width: 720px;
            display: flex;
            justify-content: space-between;
        }
    }
`

export default function TempLandingPage() {
    return (
        <PageContainer>
            <div className={'img-container'}></div>
            <p>{'Check back soon...'}</p>
            <iframe title={'Figma Embed'} border='none' outline='none' width="344px" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fy8tQlMEGSe5cRnD8PVX5sm%2FHack-A-Thon%3Fnode-id%3D0%253A1" allowFullScreen></iframe>
            <h2>{'The team'}</h2>
            <div className={'sections-wrapper'}>
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