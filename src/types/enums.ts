enum EuserStatus{
    ACTIVE = "ACTIVE",
    UNACTIVE = "UNACTIVE",
    BANNED = "BANNED"
}
enum EuserRole{
    ADMIN  = "ADMIN",
    USER = "USER",
    EXPERT = "EXPERT"
}
enum EcourseStatus{
    APPROVED = "APPROVED",
    PENDING = "PENDING",
    REJECTED = "REJECTED"
}
enum EcourseLevel{
    BEGINNER = "BEGINNER",
    INTERMADIATE = "INTERMADIATE",
    ADVANCE = "ADVANCE"
}
enum ElessonType{
    VIDEO = "VIDEO",
    TEXT ="TEXT"
}
export {EuserStatus , EuserRole , EcourseStatus , EcourseLevel , ElessonType }