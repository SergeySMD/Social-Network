import React, {useState, useEffect} from 'react';
import s from './Post.module.css';
import {Dropdown} from "semantic-ui-react";
import {PostInputComponent} from "../../../Commons/FormControls/FormsControls";
import TextareaAutosize from "react-textarea-autosize";
import {ImagePreview} from "../MyPosts";

const Post = (props) => {
    let [newText, setNewText] = useState(props.message)
    let [editMode, setEditMode] = useState(false)

    const onTextChange = (event) => {
        setNewText(event.target.value)
    }
    const onCancelButtonClick = () => {
        setEditMode(false);
        setNewText(props.message)
    }
    const onEditClick = () => {
        setEditMode(true)
    }
    const onSaveButtonClick = (id, text) => {
        props.setEditPostNewText(id, text)
        setEditMode(false)
        setNewText(props.message)
    }
    const onDeleteButtonClick = (id) => {
        props.removePost(id)
    }

    return (
        <div className={s.item} style={editMode ? {boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.08)'} : {}}>
            <div className={s.image}><img src={props.avatar}/></div>
            <div className={s.author}>{props.username}</div>
            <div className={s.menu}>
                <PostMenu postId={props.id} remove={props.removePost} editMode={editMode} onEditClick={onEditClick}/>
            </div>
            <div className={s.date}>{props.date}</div>
            <div className={s.message}>
                {editMode ?
                    <div className={s.postEdit}>
                        <TextareaAutosize className={s.textArea}
                                          value={newText}
                                          onChange={(event) => {
                                              onTextChange(event)
                                          }}
                                          type="text"
                                          maxlength={1200}
                                          placeholder={"Your post message"} maxRows={16}/>
                        {newText
                            ? <button className={s.saveButton} onClick={() => {
                                onSaveButtonClick(props.id, newText)
                            }}>Save</button>
                            : <button className={s.deleteButton} onClick={() => {
                                onDeleteButtonClick(props.id)
                            }}>Delete</button>}
                        <button className={s.cancelButton} onClick={() => {
                            onCancelButtonClick()
                        }}>Cancel
                        </button>
                    </div>
                    :
                    <span>{props.message}</span>}
                {props.PostImage !== null ?
                    <div className={s.postPhoto}>
                        <img src={props.PostImage}/>
            {/*            {editMode ?*/}
            {/*                <div className={s.imagePreviewButton} title={'Delete image'} onClick={() => {*/}
            {/*                    props.deletePostImage(props.id)*/}
            {/*                }}>*/}
            {/*                    <svg height="12pt" width="12pt" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                         viewBox="0 0 512.001 512.001"*/}
            {/*                         fill="black">*/}
            {/*                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892*/}
			{/*L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999*/}
			{/*c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998*/}
			{/*c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>*/}
            {/*                    </svg>*/}
            {/*                </div> : null}*/}
                    </div>
                    : null}
            </div>
            <div className={s.likeBlock}>
                <svg
                    onClick={() => {
                        props.onLikeClick(props.id)
                    }}
                    width="20" height="20" viewBox="0 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
                    {props.isLiked
                        ? <path fill="var(--color-block)"
                                d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
			c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
			c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
			s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
			C512,93.417,453.532,30,376,30z"/>
                        : <path fill="var(--707070-EDEEF0-text-color)"
                                d="M474.644,74.27C449.391,45.616,414.358,29.836,376,29.836c-53.948,0-88.103,32.22-107.255,59.25
			c-4.969,7.014-9.196,14.047-12.745,20.665c-3.549-6.618-7.775-13.651-12.745-20.665c-19.152-27.03-53.307-59.25-107.255-59.25
			c-38.358,0-73.391,15.781-98.645,44.435C13.267,101.605,0,138.213,0,177.351c0,42.603,16.633,82.228,52.345,124.7
			c31.917,37.96,77.834,77.088,131.005,122.397c19.813,16.884,40.302,34.344,62.115,53.429l0.655,0.574
			c2.828,2.476,6.354,3.713,9.88,3.713s7.052-1.238,9.88-3.713l0.655-0.574c21.813-19.085,42.302-36.544,62.118-53.431
			c53.168-45.306,99.085-84.434,131.002-122.395C495.367,259.578,512,219.954,512,177.351
			C512,138.213,498.733,101.605,474.644,74.27z M309.193,401.614c-17.08,14.554-34.658,29.533-53.193,45.646
			c-18.534-16.111-36.113-31.091-53.196-45.648C98.745,312.939,30,254.358,30,177.351c0-31.83,10.605-61.394,29.862-83.245
			C79.34,72.007,106.379,59.836,136,59.836c41.129,0,67.716,25.338,82.776,46.594c13.509,19.064,20.558,38.282,22.962,45.659
			c2.011,6.175,7.768,10.354,14.262,10.354c6.494,0,12.251-4.179,14.262-10.354c2.404-7.377,9.453-26.595,22.962-45.66
			c15.06-21.255,41.647-46.593,82.776-46.593c29.621,0,56.66,12.171,76.137,34.27C471.395,115.957,482,145.521,482,177.351
			C482,254.358,413.255,312.939,309.193,401.614z"/>
                    }

                </svg>
                <span style={props.isLiked?{color: 'var(--color-block)'}:{color: 'var(--707070-EDEEF0-text-color)'}}>{props.likeCounter}</span></div>
        </div>
    )
}
export default Post;

const PostMenu = ({postId, remove, editMode, onEditClick}) => {
    return (
        <Dropdown upward
                  icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.00001 12C3.10459 12 4.00003 11.1046 4.00003 10C4.00003 8.89543 3.10459 8 2.00001 8C0.895437 8 0 8.89543 0 10C0 11.1046 0.895437 12 2.00001 12Z"/>
                      <path d="M9.99996 12C11.1045 12 12 11.1046 12 10C12 8.89543 11.1045 8 9.99996 8C8.89539 8 7.99995 8.89543 7.99995 10C7.99995 11.1046 8.89539 12 9.99996 12Z"/>
                      <path d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z"/>
                  </svg>}>
            <Dropdown.Menu>
                <Dropdown.Item key="Edit post" text='Edit post' value='Edit post' icon={'edit outline'}
                               disabled={editMode}
                               onClick={() => {
                                   onEditClick()
                               }}/>
                <Dropdown.Item key="Delete post" text='Delete post' value='Delete post'
                               icon={'trash alternate outline'}
                               onClick={() => remove(postId)}/>
            </Dropdown.Menu>
        </Dropdown>
    )
}