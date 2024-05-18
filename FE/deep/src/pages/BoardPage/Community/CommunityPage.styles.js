import styled from "styled-components";

export const CommunityWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
`;

export const CommunityContainer = styled.div`
    width: 820px;
    height: calc(100% - 60px);
    margin: 60px 0 200px;

    .board_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px 0 30px;
    }

    .board_title {
        font-size: 2.4rem;
    }
`;
