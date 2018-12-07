//reformatData is used to get the data necessary to implement React Gallery

const reformatData = data => {
  return data.map(gif => {
    let reformat = {};
    reformat.src = gif.images.original.url;
    reformat.thumbnail = gif.images.fixed_width.url;
    reformat.thumbnailWidth = parseInt(gif.images.preview_gif.width);
    reformat.thumbnailHeight = parseInt(gif.images.preview_gif.height);
    reformat.caption = gif.title;
    reformat.id = gif.id;
    reformat.user = gif.user;
    reformat.datetime = gif.import_datetime;
    return reformat;
  });
};

export default reformatData;
