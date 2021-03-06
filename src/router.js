import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/anotacoes",
      name: "anotacoes",
      component: () => import("./views/Anotacoes.vue")
    },
    {
      path: "/Login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/escrever",
      name: "Escrever",
      component: () => import("./views/Escrever.vue")
    },
    {
      path: "/gerenciar",
      name: "Gerenciar",
      component: () => import("./views/Gerenciar.vue")
    },
    {
      path: "/postdisplay",
      name: "Ver Post",
      component: () => import("./views/PostDisplay.vue")
    },
    {
      path: "/manageuser",
      name: "Gerenciar usuário",
      component: () => import("./views/ManageUser.vue")
    },
    {
      path: "/cadastro",
      name: 'cadastrar',
      component: () => import("./views/Cadastro.vue")
    }
  ]
});
