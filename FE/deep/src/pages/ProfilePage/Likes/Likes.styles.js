import styled from "styled-components";

export const LikesContainer = styled.div`
    width: 820px;

    /* nothing comments */
    .nothing_likes_container {
        padding-top: 100px;
        text-align: center;
    }

    .nothing_likes {
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }

    .nothing_likes img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0.4;
    }

    .nothing_likes_container span {
        display: block;
        margin-top: 30px;
        color: #666;
        font-size: 2rem;
    }

    /* likes */
    .post_likes {
        padding: 0 30px;
    }

    .post_like {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 30px 0;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    .post_likes li:last-child {
        border-bottom: none;
    }

    /* post title */
    .post_like .post_title {
        margin-bottom: 20px;
        font-size: 1.8rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: keep-all;
        overflow: hidden;
    }

    .post_like .user_post_info {
        color: #999;
        font-size: 1.6rem;
    }

    /* user nickname */
    .post_like .user_post_info .user_nickname {
        margin-right: 20px;
        color: #666;
    }

    /* post created time */
    .post_like .user_post_info .created_date {
        margin-right: 5px;
    }

    /* contents item */
    .post_like .contents_item {
        display: flex;
        color: #999;
    }

    .post_like .contents_item span {
        display: flex;
        align-items: center;
        margin-right: 7px;
    }

    .post_like .contents_item span span {
        margin-left: 7px;
        font-size: 1.4rem;
    }

    .post_like .contents_item .views svg,
    .post_like .contents_item span img {
        width: 20px;
        height: 20px;
    }
`;
