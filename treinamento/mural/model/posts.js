module.exports = {
  posts: [],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    this.posts.push({id: generateID(), title, description})
  },

  deletePost(delPost) {
    this.posts.forEach((post) => {
      if (post.id == delPost) {
        let pos = this.posts.indexOf(post)
        this.posts.splice(pos, 1)
      }
    })
  }
}

function generateID() {
  return Math.random().toString(36).substring(2, 9)
}