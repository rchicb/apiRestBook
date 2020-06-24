import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import listBook from '@/components/Book/listBook'
import editBook from '@/components/Book/editBook'
import deleteBook from '@/components/Book/deleteBook'
import createBook from '@/components/Book/createBook'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'ListBook',
      component: listBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: editBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: deleteBook
    },
    {
      path: '/books/create',
      name: 'CreateBook',
      component: createBook
    }
  ],
  mode:'history'
})
