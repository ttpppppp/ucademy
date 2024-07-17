type TActiveLinkProps = {
    url : string
    children : React.ReactNode
}
type TMenuItem = {
    url : string;
    title : string;
    icon ?: React.ReactNode;
}
type TcreateUserParam = {
    clerkId : string
    username : string
    email : string
    avatar ?: string
    name ?: string
}
export{ ActiveLinkProps , TMenuItem , TcreateUserParam }; 