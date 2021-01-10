import React from 'react'
import styled from 'styled-components'
import SocialLinks from '../SocialLinks'
import stedmanHeadshot from '../../../assets/images/Stedman-headshot.png'
import danHeadshot from '../../../assets/images/dan-headshot.png'
import veerHeadshot from '../../../assets/images/veer-headshot2.jpg'

const SectionContainer = styled.div`
    box-sizing: border-box;
    margin: 0px 0px 64px 0px;
    width: 100%;
    min-height: 288px;
    position: relative;
    /* border: 2px dashed gray; */

    & > h3 {
        box-sizing: border-box;
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 0px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: bold;
        /* font-weight: 500; */
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #303030;
        /* border: 1px dotted blue; */
    }

    & > .headshot-container {
        box-sizing: border-box;
        position: absolute;
        top: 56px;
        left: calc(50% - 104px/2);
        width: 104px;
        height: 104px;
        border-radius: 100%;
        background: url(${stedmanHeadshot});
        overflow: hidden;
        /* border: 1px dotted blue; */

        & > img {
            width: 100%;
            height: 100%;
        }
    }

    & > .body-one {
        box-sizing: border-box;
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 176px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: #303030;
        /* border: 1px dotted blue; */

    }

    & > .body-two {
        box-sizing: border-box;
        margin: 0px 0px 0px 0px;
        width: 328px;
        position: absolute;
        top: 208px;
        left: calc(50% - 328px/2);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
        /* border: 1px dotted blue; */
    }
`

export default function MemberSection(props) {
    const { name, branch, role, objName, linkedIn, github, portfolio } = props

    function setImage(name) {
        if (name === 'stedman') {
            return stedmanHeadshot
        } else if (name === 'dan') {
            return danHeadshot
        } else if (name === 'veer') {
            return veerHeadshot
        }
    }

    let image = setImage(objName)

    return (
        <SectionContainer>
            <h3>{name}</h3>
            <div className={'headshot-container'}><img src={image} alt={'dont know'} /></div>
            <p className={'body-one'}>{role}</p>
            <p className={'body-two'}>{branch}</p>
            <SocialLinks linkedIn={linkedIn} github={github} portfolio={portfolio} />
        </SectionContainer>
    )
}
