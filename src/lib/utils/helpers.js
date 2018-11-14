export function getCookie(name) {
  let cookieValue = null;

  if (document.cookie && document.cookie !== "") {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();

      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}

export function setCookie(key, value, expireDays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expireDays);
  let c_value =
    escape(value) +
    (expireDays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = key + "=" + c_value;
}
