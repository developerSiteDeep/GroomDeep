import { useMemo, useState } from "react";
import Input from "../../../components/Input/Input";
import {
    PostEditorContainer,
    PostEditorWrapper,
    PostButton,
} from "./PostUpdate.styles";
import TextEditor from "./TextEditor";
import axiosInstance from "../../../apis/axiosInstance";
import { GoChevronDown } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

function PostUpdate() {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [tag, setTag] = useState("");
    const [tags, setTags] = useState([]);
    const [isClick, setIsClick] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [isTitle, setIsTitle] = useState(false);
    const [isContents, setIsContents] = useState(false);
    const [isDisable, setIsDisable] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const boardNo = location.pathname.split("/")[4];

    useMemo(() => {
        const boardCategory = location.pathname.split("/")[3];

        setCategory(boardCategory);

        axiosInstance
            .post("/deep/board/detail", {
                boardNo: boardNo,
            })
            .then((response) => {
                const data = response.data;

                setTitle(data.title);
                // setContents(data.content);
                setTags(data.tag);
            })
            .catch((error) => {
                console.log(error);
                alert("게시물이 존재하지 않습니다.");
                navigate("/home");
            });

        if (boardCategory === "skill") setValue("기술 트렌드");
        else if (boardCategory === "qna") setValue("QnA");
        else if (boardCategory === "community") setValue("커뮤니티");
    }, []);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleClickCategory = () => {
        setIsClick(!isClick);
    };

    const handleClickSkill = () => {
        setValue("기술 트렌드");
        setCategory("skill");
        setIsClick(false);
    };

    const handleClickQna = () => {
        setValue("QnA");
        setCategory("qna");
        setIsClick(false);
    };

    const handleClickCommunity = () => {
        setValue("커뮤니티");
        setCategory("community");
        setIsClick(false);
    };

    const handleChangeTag = (e) => {
        setTag(e.target.value);
    };

    const handleAddTags = (e) => {
        if (e.key === "Enter") {
            setTags([...tags, `#${tag}`]);
            setTag("");
        }
    };

    const handleRemoveTag = (e, index) => {
        const remove = tags.toSpliced(index, 1);
        setTags(remove);
    };

    const updatePost = () => {
        if (category === "") {
            alert("카테고리를 선택해 주세요.");
        } else if (title === "") {
            alert("제목을 작성해 주세요.");
        } else if (contents === "") {
            alert("내용을 입력해 주세요.");
        } else {
            setIsDisable(true);

            const contentsInfo = {
                boardNo: boardNo,
                title: title,
                category: category,
                content: contents,
                tag: tags,
            };

            axiosInstance
                .put("/deep/board/modify", contentsInfo)
                .then((response) => {
                    alert("게시글 수정이 완료되었습니다.");
                    navigate(`/${category}/${response.data.boardNo}`);
                })
                .catch((error) => {
                    console.log(error);
                    alert("게시글 작성이 실패하였습니다.\n다시 시도해 주세요.");
                    setIsDisable(false);
                });
        }
    };

    const cancelCreatePost = () => {
        if (window.confirm("변경사항이 저장되지 않을 수 있습니다.")) {
            navigate(-1);
        } else {
            return;
        }
    };

    return (
        <PostEditorWrapper>
            <PostEditorContainer>
                <h3 className="post_category_title">카테고리</h3>
                <div className="post_category">
                    <button
                        className="category_default_value"
                        onClick={handleClickCategory}
                        onBlur={() => setIsClick(false)}
                    >
                        {value === ""
                            ? "카테고리를 선택해 주세요."
                            : `${value}`}
                        <GoChevronDown />
                    </button>
                    <ul
                        className={
                            "select_category " + (isClick ? "" : "hidden")
                        }
                    >
                        <li>
                            <button
                                className="skill"
                                onMouseDown={handleClickSkill}
                            >
                                기술 트렌드
                            </button>
                        </li>
                        <li>
                            <button
                                className="qna"
                                onMouseDown={handleClickQna}
                            >
                                QnA
                            </button>
                        </li>
                        <li>
                            <button
                                className="community"
                                onMouseDown={handleClickCommunity}
                            >
                                커뮤니티
                            </button>
                        </li>
                    </ul>
                    <Input
                        type="text"
                        value={title}
                        placeholder="제목을 입력해 주세요."
                        onChange={handleChangeTitle}
                    />
                </div>
                <TextEditor setContents={(content) => setContents(content)} />
                <ul className="tags_container">
                    {tags.map((tag, index) => {
                        return (
                            <li
                                key={index}
                                className="tag"
                                onClick={(e) => handleRemoveTag(e, index)}
                            >
                                {tag}
                            </li>
                        );
                    })}
                </ul>
                <div className="tags">
                    <Input
                        type="text"
                        value={tag}
                        placeholder="태그를 입력해 주세요"
                        onChange={handleChangeTag}
                        onKeyPress={handleAddTags}
                    />
                </div>
                <div className="buttons">
                    <PostButton inverted onClick={cancelCreatePost}>
                        취소
                    </PostButton>
                    <PostButton onClick={updatePost} disabled={isDisable}>
                        수정하기
                    </PostButton>
                </div>
            </PostEditorContainer>
        </PostEditorWrapper>
    );
}

export default PostUpdate;
