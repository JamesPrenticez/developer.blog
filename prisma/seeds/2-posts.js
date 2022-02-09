const posts = [
  {
    id: 1,
    title: 'Elon Musk Plans to Colonize Mars',
    description: 'Is the future now?',
    slug: 'elon-mars',
    content: 'Ill be surprised if we’re not landing on Mars within five years. Other space experts say Mars probably cant sustain long-term human settlement at all.',
    img: './posts/mars.jpg',
    published: true,
    authorId: 2
  },
  {
    id: 2,
    title: '::Selection Linear Gradients',
    description: 'Cool effect achieved with only CSS',
    slug: 'linear-gradients',
    content: "::selection \{ \n color: white \n background: linear-gradient(to right, rgb(255,0,0), \n rgb(0,255,0), rgb(0,0,255 \)\} \n This does not work because a linear gradient is technically a 'background-image' which is not supported by ::selection according the the MDN https://developer.mozilla.org/en-US/docs/Web/CSS/::selection'",
    img: './posts/linear.png',
    published: true,
    authorId: 1
  },
]

module.exports = {posts}
