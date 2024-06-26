import styled from "styled-components";
import { palette } from "../../styles/palette";

export const TagPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TagPageContainer = styled.div`
    width: 1280px;
    max-width: 1280px;
    height: calc(100% - 60px);
    margin: 60px 0 200px;

    .tag_title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: 50px;
        border: 1px solid ${palette.blue[6]};
        border-radius: 25px;
        color: ${palette.blue[6]};
        text-align: center;
        font-weight: 700;
    }

    .tag_title h4 {
        font-size: 2rem;
        font-weight: 500;
    }

    .posts_container {
        margin-top: 50px;
    }

    .posts_container .post {
        margin-bottom: 30px;
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;
    }

    .posts_container li:last-child {
        margin-bottom: 0;
    }

    .user_profile_container {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .posts_container .post .user_profile {
        font-size: 1.6rem;
    }

    .posts_container .post .user_profile .user_random {
        margin-left: 7px;
        color: #999;
    }

    .posts_container .post .content_time {
        color: #666;
        font-size: 1.6rem;
    }

    .posts_container .post .post_content {
        cursor: pointer;
    }

    .posts_container .post .post_content .post_title {
        margin: 30px 0;
        font-size: 1.8rem;
        font-weight: 500;
    }

    .contents_container {
        display: flex;
        justify-content: space-between;
    }

    .contents_container .tags .tag {
        display: inline-block;
        margin-right: 7px;
        padding: 7px 13px;
        border: 1px solid ${palette.blue[6]};
        border-radius: 20px;
        color: ${palette.blue[6]};
        font-size: 1.4rem;
        font-weight: 600;
    }

    .posts_container .post .post_content .contents_item span {
        display: inline-flex;
        align-items: center;
        margin-right: 15px;
    }

    .posts_container .post .post_content .contents_item span:last-child {
        margin-right: 0;
    }

    .posts_container .post .post_content .contents_item span img {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }

    .posts_container .post .post_content .contents_item span span {
        color: #666;
        font-size: 1.4rem;
    }
`;
