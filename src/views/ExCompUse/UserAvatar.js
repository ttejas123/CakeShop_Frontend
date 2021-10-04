import Avatar from "@components/avatar"

const UserAvatar = ({ url, fname, lname, width, height }) => {
  console.log(url, fname, lname)
  if (url === "") {
    const stateNum = Math.floor(Math.random() * 6),
      states = [
        "light-success",
        "light-danger",
        "light-warning",
        "light-info",
        "light-primary",
        "light-secondary"
      ],
      color = states[stateNum]
    return (
      <Avatar
        initials
        color={color}
        className="rounded mr-2 my-25"
        content={`${fname} ${lname}`}
        contentStyles={{
          borderRadius: 0,
          fontSize: "calc(36px)",
          width: "100%",
          height: "100%"
        }}
        style={{
          height: width,
          width: height
        }}
      />
    )
  } else {
    return (
      <img
        className="user-avatar rounded mr-2 my-25 cursor-pointer"
        src={url}
        alt="user profile avatar"
        height={height}
        width={width}
      />
    )
  }
}
export default UserAvatar
