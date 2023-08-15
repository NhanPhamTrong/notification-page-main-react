import { useState } from "react"
import "./App.scss"
import { Data } from "./Data"

const CalculateTime = (time) => {
    let differences = new Date() - time
    const timeConvertList = [1000, 60, 60, 24, 7, 4, 12]
    const timeUnitList = ["s", "m", "h"]
    let i = 0

    while (differences > timeConvertList[i]) {
        differences = differences / timeConvertList[i]
        i++
    }

    switch (i - 1) {
        case 3:
            return Math.floor(differences) + (Math.floor(differences) > 1 ? " days" : " day") + " ago"
        case 4:
            return Math.floor(differences) + (Math.floor(differences) > 1 ? " weeks" : " week") + " ago"
        case 5:
            return Math.floor(differences) + (Math.floor(differences) > 1 ? " months" : " month") + " ago"
        case 6:
            return Math.floor(differences) + (Math.floor(differences) > 1 ? " years" : " year") + " ago"
        default:
            return Math.floor(differences) + timeUnitList[i - 1] + " ago"
    }
}

const GetNotificationContent = (notification) => {
    switch (notification.type) {
        case "reacted-to-post":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> reacted to your recent post </span>
                        <span className="post-content">{notification.postContent}</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                </>
            )
        case "followed":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> followed you</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                </>
            )
        case "private-message":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> sent you a private message</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                    <p className="message">{notification.message}</p>
                </>
            )
        case "joined-group":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> has joined your group </span>
                        <span className="group-name">{notification.groupName}</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                </>
            )
        case "left-group":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> has left your group </span>
                        <span className="group-name">{notification.groupName}</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                </>
            )
        case "commented-on-picture":
            return (
                <>
                    <img src={notification.userAvatar} alt={notification.userName + "'s avatar"} />
                    <p className="notification-content">
                        <span className="user-name">{notification.userName}</span>
                        <span className="content"> commented on your picture</span>
                        <span className="dot"><i className="fa-solid fa-circle fa-xs"></i></span>
                    </p>
                    <img src={notification.picture} alt="commented" />
                    <p className="time-from-posting">{CalculateTime(notification.time)}</p>
                </>
            )
        default:
            return
    }
}

export const App = () => {
    // Sort by time
    const [notificationList, setNotificationList] = useState([...Data].sort((a, b) => b.time - a.time))

    const ClickNotification = (e) => {
        let newList = notificationList.map((item) => {
            if (item.id === parseInt(e.currentTarget.getAttribute("name"))) {
                item.isRead = true
            }
            return item
        })
        setNotificationList(newList)
    }

    const CountUnread = () => {
        let count = 0
        notificationList.forEach((item) => {
            count += (item.isRead ? 0 : 1)
        })
        return count
    }

    const MarkAllAsRead = () => {
        let newList = notificationList.map((item) => {
            item.isRead = true
            return item
        })
        setNotificationList(newList)
    }

    return (
        <div className="container">
            <header>
                <div>
                    <h1>Notification</h1>
                    <span>{CountUnread()}</span>
                </div>
                <button type="button" onClick={MarkAllAsRead}>Mark all as read</button>
            </header>
            <main>
                <ul>
                    {notificationList.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={item.type + (item.isRead ? " read" : "")} name={item.id} onClick={ClickNotification}>
                                    {GetNotificationContent(item)}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}