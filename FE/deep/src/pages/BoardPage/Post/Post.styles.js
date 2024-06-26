import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const PostListContainer = styled.li`
    width: 100%;
    margin-bottom: 30px;
    padding: 30px 30px 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    .post_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* user profile */
    .user_profile {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .user_profile_img {
        width: 50px;
        height: 50px;
        border: 1px solid #eee;
        border-radius: 50%;
        object-fit: cover;
    }

    .user_name {
        margin-left: 10px;
        font-size: 1.6rem;
    }

    .user_random {
        margin-left: 7px;
        color: #999;
        font-size: 1.6rem;
    }

    .content_time {
        color: #999;
        font-size: 1.6rem;
    }

    /* post content */
    .post_title {
        margin-top: 30px;
        font-size: 1.8rem;
        font-weight: 600;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
        overflow: hidden;
    }

    .post_content_container {
        overflow: hidden;
        max-height: 300px;
    }

    .post_content {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.8;
        margin: 20px 0 30px;
        font-size: 1.6rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
        overflow: hidden;
    }

    .post_content h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }

    .post_content h2 {
        font-size: 2rem;
        font-weight: 600;
    }

    .post_content h3 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    .post_content h4 {
        font-size: 1.7rem;
        font-weight: 600;
    }

    .post_content p {
        line-height: 30px;
    }

    .post_content p:has(img) {
        display: none;
        line-height: 0;
    }

    .contents_container {
        display: flex;
        justify-content: space-between;
    }

    .tags {
        max-width: 600px;
    }

    .tags .tag {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 7px 13px;
        border: 1px solid ${palette.blue[4]};
        border-radius: 20px;
        color: ${palette.blue[7]};
        font-size: 1.4rem;
        font-weight: 600;
    }

    .contents_item {
        display: flex;
        align-items: end;
        margin-bottom: 20px;
        color: #999;
        font-size: 1.4rem;
    }

    .contents_item span {
        display: inline-flex;
        align-items: center;
        margin-right: 15px;
    }

    .contents_item span:last-child {
        margin-right: 0;
    }

    .contents_item .views svg {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }

    .contents_item span img {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }
`;
