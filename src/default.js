export const saveVideoConfigToStorage = (muted) => {
    localStorage.setItem("video", JSON.stringify( { "muted": muted } ));
}
export const getVideoConfig = () => {
    return localStorage.getItem("video");
}