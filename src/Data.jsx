import avatarAngelaGray from "./assets/images/avatar-angela-gray.webp"
import avatarAnnaKim from "./assets/images/avatar-anna-kim.webp"
import avatarJacobThompson from "./assets/images/avatar-jacob-thompson.webp"
import avatarKimberlySmith from "./assets/images/avatar-kimberly-smith.webp"
import avatarMarkWebber from "./assets/images/avatar-mark-webber.webp"
import avatarNathanPeterson from "./assets/images/avatar-nathan-peterson.webp"
import avatarRizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp"
import imageChess from "./assets/images/image-chess.webp"

export const Data = [
    {
        id: Math.floor(Math.random() * 100000),
        type: "reacted-to-post",
        userAvatar: avatarMarkWebber,
        userName: "Mark Webber",
        postContent: "My first tournament today!",
        time: new Date("8/12/2023")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "followed",
        userAvatar: avatarAngelaGray,
        userName: "Angela Gray",
        time: new Date("7/12/2023")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "joined-group",
        userAvatar: avatarJacobThompson,
        userName: "Jacob Thompson",
        groupName: "Chess Club",
        time: new Date("7/12/2023")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "private-message",
        userAvatar: avatarRizkyHasanuddin,
        userName: "Rizky Hasanuddin",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks new and I'm already having lots of fun and improving my game.",
        time: new Date("8/12/2012")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "commented-on-picture",
        userAvatar: avatarKimberlySmith,
        userName: "Kimberly Smith",
        picture: imageChess,
        time: new Date("6/12/2023")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "reacted-to-post",
        userAvatar: avatarNathanPeterson,
        userName: "Nathan Peterson",
        postContent: "5 end-game strategies to increase your win rate",
        time: new Date("8/12/2023")
    },
    {
        id: Math.floor(Math.random() * 100000),
        type: "left-group",
        userAvatar: avatarAnnaKim,
        userName: "Anna Kim",
        groupName: "Chess Club",
        time: new Date("8/13/2023")
    }
]