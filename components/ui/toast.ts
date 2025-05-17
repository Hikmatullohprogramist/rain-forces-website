"use client"

import { Button } from "@/components/ui/button"

import * as React from "react"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 100000

type ToasterProps = {
  children: React.ReactNode
}

function Toaster({ children }: ToasterProps) {
  const [toasts, setToasts] = React.useState<any[]>([])
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const addToast = React.useCallback(
    (toast: any) => {
      setToasts((prev) => [...prev, { ...toast, id: count }].slice(0, TOAST_LIMIT))
      setCount((c) => c + 1)
    },
    [count],
  )

  const updateToast = React.useCallback((id: number, options: any) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, ...options } : toast)))
  }, [])

  const dismiss = React.useCallback((toastId?: number) => {
    if (toastId) {
      clearTimeout(timeoutRef.current)
      setToasts((prev) => prev.map((toast) => (toast.id === toastId ? { ...toast, open: false } : toast)))
    } else {
      setToasts((prev) =>
        prev.map((toast) => ({
          ...toast,
          open: false,
        })),
      )
    }
  }, [])

  const removeToast = React.useCallback((toastId: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId))
  }, [])

  const toast = React.useMemo(
    () => ({
      addToast,
      updateToast,
      dismiss,
      removeToast,
    }),
    [addToast, updateToast, dismiss, removeToast],
  )

  return (
    <ToastProvider swipeDirection="down">
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          open={toast.open}
          onOpenChange={(open) => {
            if (!open) dismiss(toast.id)
          }}
          className="group data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-80 data-[state=open]:zoom-in-95 data-[state=high-contrast]:border-none"
          {...toast}
        >
          {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
          {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
          <ToastClose className="group-[.data-[state=open]]:opacity-100 group-[.data-[state=open]]:translate-y-0" />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

const timeoutRef = React.useRef<number>()

type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a Toaster")
  }
  return context
}

const ToastContext = React.createContext({
  addToast: (toast: ToastProps) => {},
  updateToast: (id: number, toast: ToastProps) => {},
  dismiss: (id?: number) => {},
  removeToast: (id: number) => {},
})

type ToastActionProps = React.HTMLAttributes<HTMLButtonElement>

const ToastAction = React.forwardRef<React.ElementRef<typeof Button>, ToastActionProps>(
  ({ className, ...props }, ref) => {
    return <Button variant="outline" size="sm" ref={ref} className={className} {...props} />
  },
)
ToastAction.displayName = "ToastAction"

const toast = (props: ToastProps) => {
  const id = Math.random()
  const update = (props: Partial<ToastProps>) =>
    api.updateToast({
      ...props,
      id,
    })
  const dismiss = () => api.dismiss(id)

  api.addToast({
    ...props,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) dismiss()
    },
  })
}

const api = {
  addToast: (toast: any) => {},
  updateToast: (toast: any) => {},
  dismiss: (toastId?: number) => {},
  removeToast: (toastId: number) => {},
}

export { type ToastProps, Toaster, useToast, toast, ToastAction }
