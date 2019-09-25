export const routes = [
    {
        path: '*',
        redirect: '/',
    },  
    {
        path: '/',
        name: "root",
        component: () => import('./components/pages/auth/Signin/Signin.vue')
    },
    {
        path: '/signup',
        name: "signup",
        component: () => import('./components/pages/auth/Signup/Signup.vue'),          
    },        
    {
        path: '/loan',
        name: "loan",
        component: () => import('./components/pages/library/Loan/Loan.vue'),          
    },        
    {
        path: '/reserve',
        name: "reserve",
        component: () => import('./components/pages/library/Reserve/Reserve.vue'),            
    },        
    {
        path: '/search',
        name: "search",
        component: () => import('./components/pages/library/Search/Search.vue'),            
    },        
]