const photoAssets = import.meta.glob('../../{Me,Me_2}/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const me2PhotoCategories = {
  'IMG-20261024-WA0008.jpg': 'Haldi',
};

function photoCategory(path, filename) {
  const parts = path.split('/');
  const matchesCategory = (category) => {
    const marker = new RegExp(`(?:^|[-_.])${category}(?:$|[-_.])`, 'i');
    return parts.some((part) => marker.test(part.replace(/\.[^.]+$/, '')));
  };

  if (matchesCategory('haldi')) return 'Haldi';
  if (matchesCategory('mehendi')) return 'Mehendi';
  if (parts.some((part) => /^Me_2$/i.test(part))) return me2PhotoCategories[filename] || 'Mehendi';
  return 'Wedding';
}

export const photos = Object.entries(photoAssets)
  .filter(([path]) => !path.split('/').pop().startsWith('.trashed-'))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([path, src]) => {
    const filename = path.split('/').pop();
    const title = filename.replace(/\.[^.]+$/, '');

    return {
      id: path,
      title,
      filename,
      category: photoCategory(path, filename),
      src,
    };
  });

export const photoCategories = ['All Photos', 'Haldi', 'Mehendi', 'Wedding'];