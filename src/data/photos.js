const photoAssets = import.meta.glob('../../Me/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
});

export const photos = Object.entries(photoAssets)
  .filter(([path]) => !path.split('/').pop().startsWith('.trashed-'))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    const title = filename.replace(/\.[^.]+$/, '');

    return {
      id: filename,
      title,
      filename,
      category: 'Wedding',
      src,
    };
  });

export const photoCategories = ['All Photos', 'Wedding'];