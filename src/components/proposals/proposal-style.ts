import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-row: row wrap;
    overflow: visible;
    align-items: center;
`;

export const Container = styled.div`
    position: relative;
    text-decoration: none;
    display: block;
`;

export const Content = styled.div`
    width: 175px;
    border-radius: 4px;
    padding: 5px 5px 5px 5px;
    margin: 0rem 1.0rem .5rem 2.0rem;
    opacity: 1;
    background-color: 1;
    transition: box-shadow 100ms linear 0s;
    overflow-y: auto;
`;

export const InfosContainer = styled.div`
    display: flex;
`;

export const InfosContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 5px 0px 0px;
`;

export const ThumbnailContainer = styled.div`
    custor: pointer;
    height: 56px;
    width: 56px;
    border-radius: 4px;
    background-size: cover;
    background-color: white;
    background-position: center center;
    overflow: hidden;
`;

export const Thumbnail = styled.div`
    transition: opacity 100ms linear 0s;
    overflow: hidden;
    background-color: rgb(226, 226, 226);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const InfosColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem .1rem 0rem .4rem;
    padding: 0px .2em 0px .5em;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const InfoBox = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
    margin-top: 6px;
`;

export const Title = styled.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 550;
    color: rgb(42, 51, 61);
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
`;

export const SubTitleContainer = styled.div`
    position: relative;
    width: fit-content;
    text-align: left;
`;

export const SubTitle = styled.div`
    position: relative;
    font-family: Inter;
    font-size: 10px;
    line-height: 16px;
    color: rgb(115, 127, 140);
    margin-top: -2px;
    min-height: 16px;
    width: fit-content;
    overflow: visible;
    text-align: left;
`;