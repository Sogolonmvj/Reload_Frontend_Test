import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    align-items: center;

    background-color: white;

    border-radius: 200px;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

    margin-right: 20px;
    margin-bottom: 20px;

    padding: 0;

    cursor: pointer;

    :active {
        background-color: rgb(21, 212, 216);
        color: white;

        img {
            -webkit-filter: grayscale(1) invert(1);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(275deg) brightness(103%) contrast(104%);
        }
    }
`

export const Division = styled.div`
    display: flex;
    flex-direction: row;

    margin: 0;
    padding: 5px;
`

export const Image = styled.img`
    width: 25px;
    height: 25px;

    padding: 0;
    margin-top: 10px;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 18px;
    
    padding: 2px 4px;
`