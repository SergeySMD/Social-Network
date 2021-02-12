import React from 'react'
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state={
        editMode: false
    }
    activateEditMode = () => {
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
    }
    render() {
        return (
            <div className={s.description}>
                {!this.state.editMode &&
                <div className={s.span}>
                    <span className={s.span} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onChange={this.props.onStatusChange}
                        onFocus={(e) => {
                            e.target.style.cursor = "text"
                            e.target.style.borderBottom = "1px solid grey"
                        }}
                        onBlur={this.deactivateEditMode}
                        value={this.props.status}
                        placeholder="Enter your status"
                        maxLength="60"/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;