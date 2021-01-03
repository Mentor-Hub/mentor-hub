import React from 'react'
import styled from 'styled-components'
import { MemberSection } from './MemberSection'
import stedmanHeadshot from '../../assets/images/Stedman-headshot.png'
import smallLogo from '../../assets/images/logo-small.png'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    /* padding: 80px 0px 0px 0px; */
    border: 1px dotted lightcoral;

    & > .img-container {
        width: 328px;
        height: 80px;
        position: absolute;
        top: 80px;
        left: calc(50% - 328px/2);
        background: url(${smallLogo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px dotted blue;
    }

    & > p {
        /* margin: 64px 0px 72px 0px; */
        width: 220px;
        height: 48px;
        position: absolute;
        top: 224px;
        left: calc(50% - 220px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: #303030;
        border: 1px dotted blue;
    }

    & > h2 {
        /* margin: 0px 0px 40px 0px; */
        width: 328px;
        position: absolute;
        top: 320px;
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
        border: 1px dotted blue;
    }

    & > .sections-container {
        position: absolute;
        top: 416px;
        width: 100%;
        border: 2px solid pink;
    }
`



export default function TempLandingPage() {
    return (
        <PageContainer>
            <div className={'img-container'}></div>
            <p>{'Check back soon...'}</p>
            <h2>{'The team'}</h2>
            <div className={'sections-container'}>
                <MemberSection
                    name={'Michael Stedman'}
                    branch={'Army'}
                    role={'UX Designer & Developer'}
                    linkedIn={'linkedin link'}
                    github={'github link'}
                    portfolio={'portfolio'}
                    objName={'stedman'}
                />
            </div>
        </PageContainer>
    )
}
