import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileInfo extends React.Component {
    onStatusChange = (e) => {
        this.props.updateStatus(e.target.value)
    }
    render() {
        return (
            <div className={s.content}>
                <div className={s.image}>
                    <img src={this.props.backgroundImage}/>
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.avatar}><img src={this.props.avatar}/></div>
                    <div className={s.userName}>{this.props.username}</div>
                    <div className={s.description}><input
                        onChange={this.onStatusChange}
                        onFocus={(e) => {e.target.style.cursor = "text"}}
                        onBlur={(e) => {e.target.style.cursor = "pointer"}}
                        value={this.props.description}
                        placeholder="Enter your status"
                        maxLength="60"
                    /></div>
                </div>
            </div>
        )
    }


}
export default ProfileInfo;