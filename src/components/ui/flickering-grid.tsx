import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
  /** Cap the internal animation frame rate to reduce CPU usage (default 30fps). */
  targetFps?: number
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
  targetFps = 30,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInViewRef = useRef(false)
  const [, setIsInView] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const memoizedColor = useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`
      }
      const canvas = document.createElement("canvas")
      canvas.width = canvas.height = 1
      const ctx = canvas.getContext("2d")
      if (!ctx) return "rgba(255, 0, 0,"
      ctx.fillStyle = color
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data)
      return `rgba(${r}, ${g}, ${b},`
    }
    return toRGBA(color)
  }, [color])

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      const cols = Math.floor(width / (squareSize + gridGap))
      const rows = Math.floor(height / (squareSize + gridGap))

      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }

      return { cols, rows, squares, dpr }
    },
    [squareSize, gridGap, maxOpacity]
  )

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      const threshold = flickerChance * deltaTime
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < threshold) {
          squares[i] = Math.random() * maxOpacity
        }
      }
    },
    [flickerChance, maxOpacity]
  )

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height)

      const stride = (squareSize + gridGap) * dpr
      const size = squareSize * dpr
      for (let i = 0; i < cols; i++) {
        const x = i * stride
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j]
          ctx.fillStyle = `${memoizedColor}${opacity})`
          ctx.fillRect(x, j * stride, size, size)
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number | null = null
    let gridParams: ReturnType<typeof setupCanvas>
    const frameInterval = 1000 / Math.max(1, targetFps)

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth
      const newHeight = height || container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    let lastFrame = 0
    const animate = (time: number) => {
      if (!isInViewRef.current) {
        animationFrameId = null
        return
      }
      const elapsed = time - lastFrame
      if (elapsed >= frameInterval) {
        const deltaSeconds = elapsed / 1000
        lastFrame = time
        updateSquares(gridParams.squares, deltaSeconds)
        drawGrid(
          ctx,
          canvas.width,
          canvas.height,
          gridParams.cols,
          gridParams.rows,
          gridParams.squares,
          gridParams.dpr
        )
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      if (animationFrameId == null) {
        lastFrame = performance.now()
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const stopAnimation = () => {
      if (animationFrameId != null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        isInViewRef.current = visible
        setIsInView(visible)
        if (visible && !document.hidden) startAnimation()
        else stopAnimation()
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    const handleVisibility = () => {
      if (document.hidden) stopAnimation()
      else if (isInViewRef.current) startAnimation()
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      stopAnimation()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height, targetFps])

  return (
    <div
      ref={containerRef}
      className={cn(`h-full w-full ${className}`)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  )
}
