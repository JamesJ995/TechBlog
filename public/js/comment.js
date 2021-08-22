const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log('function run!');

  const text = document.querySelector('#comment').value.trim();
  if (text) {
    const response = await fetch(`/api/posts/comment`, {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(text);
    if (response.ok) {
      return;
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
