import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
    throw new Error('PUBLISHABLE_KEY is missing')
}
const router = createBrowserRouter([{
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            lazy: async () => {
                const module = await import('./router/HomePage.tsx')
                return { Component: module.default }
            },
        },
        {
            path: '/:page',
            lazy: async () => {
                const module = await import('./router/SinglePostPage.tsx')
                return { Component: module.default }
            },
        },
        {
            path: '/posts',
            lazy: async () => {
                const module = await import('./router/PostListPage.tsx')
                return { Component: module.default }
            },
        },
        {
            path: '/login',
            lazy: async () => {
                const module = await import('./router/LoginPage.tsx')
                return { Component: module.default }
            },
        },
        {
            path: '/register',
            lazy: async () => {
                const module = await import('./router/RegisterPage.tsx')
                return { Component: module.default }
            },
        },
        {
            path: '/write',
            lazy: async () => {
                const module = await import('./router/Write.tsx')
                return { Component: module.default }
            },
        },
    ]
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router}></RouterProvider>
    </ClerkProvider>
  </StrictMode>
)
