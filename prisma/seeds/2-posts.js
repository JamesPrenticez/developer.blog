const posts = [
  {
    id: '1',
    title: 'Elon Musk Plans to Colonize Mars',
    description: 'Is the future now?',
    slug: 'elon-mars',
    content: '{"blocks":[{"key":"fj4u1","text":"Elon Musk Plans to colonize mars by 2025","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    image: 'https://i.imgur.com/osTjpbV.jpg',
    published: true,
    authorId: '2'
  },
  {
    id: '2',
    title: '::Selection Linear Gradients',
    description: 'Cool effect achieved with only CSS',
    slug: 'linear-gradients',
    content: '{"blocks":[{"key":"fj4u1","text":"This does not work","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    image: 'https://i.imgur.com/B8O06No.png',
    published: true,
    authorId: '1'
  },
  {
    id: '3',
    title: 'One Of Everything',
    description: 'Yeah boi',
    slug: 'one-of-everything',
    content: '{"blocks":[{"key":"45hdl","text":"Bold","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"}],"entityRanges":[{"offset":4,"length":33,"key":0}],"data":{}},{"key":"6h8rd","text":"Italic","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"5e8i3","text":"Underline","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"1pjof","text":"Strikethrough","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":13,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}},{"key":"2db1j","text":"Normal","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9h8st","text":"H1","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1i3sa","text":"H2","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6st96","text":"H3","type":"header-three","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ep9fe","text":"H4","type":"header-four","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ah4o5","text":"H5","type":"header-five","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"d6bl","text":"H6","type":"header-six","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dg2p2","text":"Blockquote","type":"blockquote","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5qo87","text":"Code","type":"code","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5q1fp","text":"Fontsize","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":8,"style":"fontsize-96"}],"entityRanges":[],"data":{}},{"key":"bl919","text":"Arial","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"fontsize-16"},{"offset":0,"length":5,"style":"fontfamily-Arial"}],"entityRanges":[],"data":{}},{"key":"7admf","text":"Georgia","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"fontsize-16"},{"offset":0,"length":7,"style":"fontfamily-Georgia"}],"entityRanges":[],"data":{}},{"key":"5gh6h","text":"Impact","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"fontsize-16"},{"offset":0,"length":6,"style":"fontfamily-Impact"}],"entityRanges":[],"data":{}},{"key":"cdt9e","text":"Tahoma","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":6,"style":"fontsize-16"},{"offset":0,"length":6,"style":"fontfamily-Tahoma"}],"entityRanges":[],"data":{}},{"key":"cngjn","text":"Times New Roman","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":15,"style":"fontsize-16"},{"offset":0,"length":15,"style":"fontfamily-Times New Roman"}],"entityRanges":[],"data":{}},{"key":"a5avg","text":"Verdana","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"fontsize-16"},{"offset":0,"length":7,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{}},{"key":"d5584","text":"Unordered","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"fontsize-16"},{"offset":0,"length":9,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{}},{"key":"c51ac","text":"Ordered","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"fontsize-16"},{"offset":0,"length":7,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{}},{"key":"bq3po","text":"Left-Align","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":10,"style":"fontsize-16"},{"offset":0,"length":10,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{}},{"key":"1ehq5","text":"Center-Align","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":12,"style":"fontsize-16"},{"offset":0,"length":12,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{"text-align":"center"}},{"key":"216qt","text":"Right-Align","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":11,"style":"fontsize-16"},{"offset":0,"length":11,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{"text-align":"right"}},{"key":"9jnse","text":"Justified","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"fontsize-16"},{"offset":0,"length":9,"style":"fontfamily-Verdana"}],"entityRanges":[],"data":{"text-align":"justify"}},{"key":"fj46i","text":"Text Color","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":10,"style":"color-rgb(256,0,0)"}],"entityRanges":[],"data":{}},{"key":"1q83n","text":"Text Highlight","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":14,"style":"color-rgb(0,0,0)"},{"offset":0,"length":14,"style":"bgcolor-rgb(255,223,101)"}],"entityRanges":[],"data":{}},{"key":"4ie1u","text":"https://github.com/JamesPrenticez ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":34,"style":"color-rgb(0,0,0)"},{"offset":0,"length":34,"style":"bgcolor-rgb(256,256,256)"}],"entityRanges":[{"offset":0,"length":33,"key":1}],"data":{}},{"key":"511vp","text":"😃","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":1,"style":"color-rgb(0,0,0)"},{"offset":0,"length":1,"style":"bgcolor-rgb(256,256,256)"}],"entityRanges":[],"data":{}},{"key":"203v","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5eu7v","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":2}],"data":{}},{"key":"6j49f","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"37b9p","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://github.com/JamesPrenticez","targetOption":"_self"}},"1":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://github.com/JamesPrenticez","targetOption":"_self"}},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://media.istockphoto.com/photos/funny-man-with-watermelon-helmet-and-goggles-picture-id187722063?k=20&m=187722063&s=612x612&w=0&h=Jrg5LwNz3dVOiUWnpvq_KN4kAt7DX7gL--uQ4DGElT0=","height":"auto","width":"auto"}}}}',
    image: 'https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thescene.jpg,fl_progressive,g_center,h_630,q_80,w_1200/v1569444332/bonappetit_hero_one-of-everything-season-1.jpg',
    published: true,
    authorId: '1'
  },
  {
    id: 'ckzksrt5n0214asvi50pwrfzn',
    title: 'Auth-Test',
    description: 'test',
    slug: 'auth-test',
    content: '{"blocks":[{"key":"d9c6g","text":"Test","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    image: 'https://blog.wildix.com/wp-content/uploads/2018/12/Basic-and-Digest-Authentication-1024x478.jpeg',
    published: false,
    authorId: 'ckzkhlu1t0046ywvimo6zm5rj'
  },
]

module.exports = {posts}