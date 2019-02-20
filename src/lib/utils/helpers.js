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

export function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || "";
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export function search(dataList, key, word) {
  const value = word;
  const valueArr = value ? value.split(" ") : " ";
  const lastText = valueArr[valueArr.length - 1].substring(1);
  dataList =
    dataList &&
    dataList.filter(item => {
      return !!(
        lastText === "" ||
        (item[key] &&
          item[key].toLowerCase().indexOf(lastText.toLowerCase()) > -1) ||
        (item[key] !== undefined &&
          item[key].toLowerCase().indexOf(lastText.toLowerCase()) > -1)
      );
    });
  return dataList;
}
