import React, {useState, useEffect} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import {
    PostImageUploadComponent, PostInputComponent
} from "../../Commons/FormControls/FormsControls";


const maxLength1200 = maxLength(1200);


const readImages = (imageFile, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (event) => {
        const result = event.target.result;
        if (reader.readyState === 2) callback(result)
    }
}

export const PostInputForm = (props) => {
    const [PostImageURL, setPostImageURL] = useState(null)
    const [PostImageFiles, setPostImageFiles] = useState([])
    const [clearImage, setClearImage] = useState(false)

    if (PostImageURL !== undefined)
        if (PostImageFiles.length > 0) {
            readImages(PostImageFiles[0], setPostImageURL)
        }

    return (
        <div>
            <form className={s.inputBlock} onSubmit={props.handleSubmit}>
                <div className={s.newPost}>
                    <Field name={'postText'}
                           component={PostInputComponent}
                           validate={[maxLength1200]}
                    />
                </div>
                <div className={s.button}>
                    <Field name={'postImage'} enctype="multipart/form-data"
                           component={PostImageUploadComponent}
                           setFiles={setPostImageFiles}
                           type='file'
                           clearImage={clearImage}
                           setClearImage={setClearImage}
                    />
                    <button onClick={()=>{setPostImageFiles([]);setPostImageURL(null)}}>
                        <svg width="20" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M7.29165 14.6766V18.5416C7.29165 18.8116 7.46498 19.0508 7.72165 19.1358C7.78581 19.1566 7.85165 19.1666 7.91665 19.1666C8.11165 19.1666 8.29998 19.075 8.41998 18.9116L10.6808 15.835L7.29165 14.6766Z"
                                    fill="#8683F8"/>
                                <path
                                    d="M19.7375 0.115907C19.5459 -0.0199262 19.2942 -0.0382595 19.0859 0.0709072L0.335833 9.86257C0.114166 9.97841 -0.0166678 10.2151 0.00166559 10.4642C0.0208323 10.7142 0.186666 10.9276 0.422499 11.0084L5.63501 12.7901L16.7359 3.29841L8.14584 13.6476L16.8817 16.6334C16.9467 16.6551 17.015 16.6667 17.0834 16.6667C17.1967 16.6667 17.3092 16.6359 17.4084 16.5759C17.5667 16.4792 17.6742 16.3167 17.7017 16.1342L19.9934 0.717574C20.0275 0.484241 19.9292 0.252574 19.7375 0.115907Z"
                                    fill="#8683F8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                {(PostImageURL) ? <ImagePreview src={PostImageURL}
                                                setPostImageURL={setPostImageURL}
                                                setPostImageFiles={setPostImageFiles}
                                                setClearImage={setClearImage}/> : null}
            </form>
        </div>
    )
}
export const ImagePreview = (props) => {

    return (
        <div className={s.imagePreview}>
            <img src={props.src}/>
            <div className={s.imagePreviewButton} title={'Delete image'} onClick={() => {
                props.setPostImageURL(null)
                props.setPostImageFiles([])
                props.setClearImage(true)
            }}>
                <svg height="12pt" width="12pt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"
                     fill="black">
                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
			L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
			c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
			c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                </svg>
            </div>
        </div>
    )
}

const PostInputReduxForm = reduxForm({form: 'ProfilePostInputForm'})(PostInputForm)

let MyPosts = (props) => {
    const [clearPreview, setClearPreview] = useState(false)

    let postsElements = props.posts
        .map(p => <Post
            avatar={props.avatar}
            username={props.username}
            message={p.message}
            likeCounter={p.likeCounter}
            isLiked={p.isLiked}
            date={p.date}
            PostImage={p.PostImage}
            onLikeClick={props.onLikeClick}
            removePost={props.removePost}
            setEditPostNewText={props.setEditPostNewText}
            deletePostImage={props.deletePostImage}
            id={p.id}
            key={p.id}/>);

    const onSubmit = (Data) => {
        console.log(Data)
        if (Data.postImage !== undefined && Data.postImage.length !== 0) {
            if (Data.postImage[0])
                readFile(Data.postText, Data.postImage[0])
        } else if (Data.postText !== undefined) {
            props.addPost(Data.postText, null);
            setClearPreview(true);
        }
    }

    const readFile = (postText, file) => {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const result = event.target.result;
            props.addPost(postText, result);
            setClearPreview(true);
        });
        reader.readAsDataURL(file);
    }
    return (
        <div className={s.postBlock}>
            <PostInputReduxForm {...props} onSubmit={onSubmit} clearPreview={clearPreview}
                                setClearPreview={setClearPreview}/>
            {props.posts.length > 0 && <div className={s.title}>
                My posts
            </div>}
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default React.memo(MyPosts);