export interface LoginModel {
    username: string;
    password: string;
    newPasswordRequiredCb?: (...argw) => {};
    onSuccessCb?: (...argw) => {};
    onFailureCb?: (...argw) => {};
}
