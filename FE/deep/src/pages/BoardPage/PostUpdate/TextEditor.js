import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/toastui-editor.css";
import { TextEditorContainer } from "./TextEditor.styles";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import { useMemo, useRef } from "react";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import axiosInstance from "../../../apis/axiosInstance";
import { useLocation } from "react-router-dom";

function TextEditor(props) {
    const location = useLocation();

    const boardNo = location.pathname.split("/")[4];

    useMemo(() => {
        axiosInstance
            .post("/deep/board/detail", {
                boardNo: boardNo,
            })
            .then((response) => {
                editorRef.current.getInstance().setHTML(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const editorRef = useRef();

    const toolbar = [
        ["bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol"],
        ["code"],
        ["link", "image"],
    ];

    const onChange = () => {
        const data = editorRef.current.getInstance().getHTML();
        props.setContents(data);
    };

    const uploadImage = async (blob) => {
        const formData = new FormData();
        formData.append("img", blob);

        const response = await axiosInstance.post("/deep/board/img", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data.img;
    };

    const onUploadImage = async (blob, callback) => {
        const imageUrl = await uploadImage(blob);
        callback(imageUrl, "alt text");
    };

    return (
        <TextEditorContainer>
            <Editor
                initialEditType="wysiwyg"
                autofocus={false}
                ref={editorRef}
                toolbarItems={toolbar}
                hideModeSwitch
                height="50vh"
                language="ko-KR"
                placeholder="내용을 입력해 주세요."
                useCommandShortcut={true}
                onChange={onChange}
                plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
                hooks={{
                    addImageBlobHook: onUploadImage,
                }}
            />
        </TextEditorContainer>
    );
}

export default TextEditor;
