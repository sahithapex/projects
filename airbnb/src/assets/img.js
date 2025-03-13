const images = import.meta.glob("/src/assets/img wall/*.{png,jpg,jpeg,svg}", { eager: true });

const imageArray = Object.values(images).map((img) => img.default);

export default imageArray;
