export const saveVideoConfigToStorage = () => {
    localStorage.setItem("video", JSON.stringify( { "muted":true } ));
}
export const getVideoConfig = () => {
    return localStorage.getItem("video");
}