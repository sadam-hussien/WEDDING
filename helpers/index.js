export function getNames(arr) {
  let obj = {};

  arr.forEach((item) => {
    obj[item.name] = item.value || "";
  });

  return obj;
}

export function handleDate(d) {
  const date = new Date(d);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();

  return `${year}-${month}-${day}`;
}
