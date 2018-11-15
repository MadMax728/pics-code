export function getCookie(name) {
  let cookieValue = null;

  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}

export function setCookie(key, value, expireDays) {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expireDays);
  const c_value =
    escape(value) +
    (expireDays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = key + "=" + c_value;
}
