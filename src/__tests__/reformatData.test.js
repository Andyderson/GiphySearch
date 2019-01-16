import reformatData from "../lib/reformatData.js";

describe("Reformat response data for photo gallery", () => {
  const testData = [
    {
      images: {
        original: {
          url: "https://www.originalurl.com"
        },
        fixed_width: {
          url: "https://fixedwidthurl.com"
        },
        preview_gif: {
          url: "https://www.previewgifurl.com",
          width: "57",
          height: "103"
        }
      },
      title: "test title",
      id: "0",
      user: {},
      import_datetime: "2018-1-1 00:00:00"
    }
  ];

  const reformatted = reformatData(testData);
  const gif = reformatted[0];
  const testGif = testData[0];

  test("should reformat response data to proper object properties", () => {
    expect(Array.isArray(reformatted)).toBe(true);
    expect(gif.src).toBe(testGif.images.original.url);
    expect(gif.thumbnail).toBe(testGif.images.fixed_width.url);
    expect(gif.thumbnailWidth).toBe(parseInt(testGif.images.preview_gif.width));
    expect(gif.thumbnailHeight).toBe(
      parseInt(testGif.images.preview_gif.height)
    );
    expect(gif.caption).toBe(testGif.title);
    expect(gif.id).toBe(testGif.id);
    expect(gif.user).toBe(testGif.user);
    expect(gif.datetime).toBe(testGif.import_datetime);
  });
});
