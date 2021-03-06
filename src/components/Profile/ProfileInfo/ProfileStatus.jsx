import React, {useState, useEffect} from 'react'
import s from "./ProfileStatus.module.css";

class ProfileStatusClass extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        if (this.props.link == this.props.id) {
            this.setState({
                editMode: true
            })
        }
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={s.description}>
                {!this.state.editMode &&
                <div className={s.span}>
                    <span className={s.span}
                          onDoubleClick={this.activateEditMode}>{this.props.status || 'Empty status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onChange={this.onStatusChange}
                        onFocus={(e) => {
                            e.target.style.cursor = "text"
                            e.target.style.borderBottom = "1px solid var(--black-white-text-color)"
                        }}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        placeholder="Enter your status"
                        maxLength="60"/>
                </div>
                }
            </div>
        )
    }
}

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    // useEffect(()=>{
    //     setStatus(props.status)
    // },[props.status])

    const activateEditMode = () => {
        if (props.link == props.id) {
            setStatus(props.status)
            setEditMode(true)
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.description}>
            {!editMode &&
            <div className={s.span}>
                <span className={s.span}
                      onDoubleClick={activateEditMode}>{props.status || 'Empty status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onChange={onStatusChange}
                    onFocus={(e) => {
                        e.target.style.cursor = "text"
                        e.target.style.borderBottom = "1px solid var(--black-white-text-color)"
                    }}
                    onBlur={deactivateEditMode}
                    value={status}
                    placeholder="Enter your status"
                    maxLength="60"/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;