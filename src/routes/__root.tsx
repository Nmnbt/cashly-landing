import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { useEffect } from "react"

export const Route = createRootRoute({
  component: () => {
    // Smooth scroll for navigation links
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a[href^="#"]')
        if (anchor) {
          e.preventDefault()
          const href = anchor.getAttribute('href')
          if (href) {
            const element = document.querySelector(href)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }
        }
      }

      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
      <>
        <Outlet />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </>
    )
  },
})
