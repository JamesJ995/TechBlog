const newCommentHandler = async (event) => {
  event.preventDefault();

  const text = document.querySelector('#comment-text').value.trim();

  if (text) {
    const response = await fetch(`/api/posts/comment`, {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
