export const loadMore = (page = 0) => {
  return new Promise((resolve, reject) => {
    console.log("loading more");
    let html = "";
    for (let x = page * 20; x < page * 20 + 20; x++) {
      html += `<li>Item ${x}</li>`;
    }
    resolve(html);
  });
};
