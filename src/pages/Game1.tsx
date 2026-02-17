import { useEffect, useRef, useState } from "react"

const FRAME_WIDTH = 80
const FRAME_HEIGHT = 110
const FRAMES = 3

const WALK_SPEED = 3
const RUN_SPEED = 6

const MAP_WIDTH = 2048
const MAP_HEIGHT = 2048
const MAP_SCALE = 2

const VIEWPORT_WIDTH = 1028
const VIEWPORT_HEIGHT = 1028

const WORLD_WIDTH = MAP_WIDTH * MAP_SCALE
const WORLD_HEIGHT = MAP_HEIGHT * MAP_SCALE

const PLAYER_HALF_WIDTH = FRAME_WIDTH / 2
const PLAYER_FEET_HEIGHT = FRAME_HEIGHT

type Dir = "down" | "right" | "left" | "up"

const row: Record<Dir, number> = {
  down: 0,
  right: 2,
  left: 1,
  up: 3,
}

export const Game1 = () => {
  const [player, setPlayer] = useState({ x: 1000, y: 1000 })
  const [dir, setDir] = useState<Dir>("down")
  const [frame, setFrame] = useState(1)

  const keys = useRef<Record<string, boolean>>({})
  const lastFrameTime = useRef(0)

  const cameraX = Math.min(
    Math.max(player.x - VIEWPORT_WIDTH / 2, 0),
    WORLD_WIDTH - VIEWPORT_WIDTH
  )

  const cameraY = Math.min(
    Math.max(player.y - VIEWPORT_HEIGHT / 2, 0),
    WORLD_HEIGHT - VIEWPORT_HEIGHT
  )

  useEffect(() => {
    const down = (e: KeyboardEvent) => (keys.current[e.key] = true)
    const up = (e: KeyboardEvent) => (keys.current[e.key] = false)

    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)

    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }
  }, [])

  useEffect(() => {
    let id: number

    const loop = (time: number) => {
      const isRunning =
        keys.current.Shift ||
        keys.current.ShiftLeft ||
        keys.current.ShiftRight

      const speed = isRunning ? RUN_SPEED : WALK_SPEED
      const frameDelay = isRunning ? 80 : 120

      setPlayer((p) => {
        let { x, y } = p
        let moving = false

        if (keys.current.ArrowDown) {
          y += speed
          setDir("down")
          moving = true
        }
        if (keys.current.ArrowUp) {
          y -= speed
          setDir("up")
          moving = true
        }
        if (keys.current.ArrowLeft) {
          x -= speed
          setDir("left")
          moving = true
        }
        if (keys.current.ArrowRight) {
          x += speed
          setDir("right")
          moving = true
        }

        x = Math.max(
          PLAYER_HALF_WIDTH,
          Math.min(x, WORLD_WIDTH - PLAYER_HALF_WIDTH)
        )

        y = Math.max(
          PLAYER_FEET_HEIGHT,
          Math.min(y, WORLD_HEIGHT)
        )

        if (moving && time - lastFrameTime.current > frameDelay) {
          setFrame((f) => (f + 1) % FRAMES)
          lastFrameTime.current = time
        }

        if (!moving) setFrame(1)

        return { x, y }
      })

      id = requestAnimationFrame(loop)
    }

    id = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(id)
  }, [])


  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">

      <div
        style={{
          width: VIEWPORT_WIDTH,
          height: VIEWPORT_HEIGHT,
          overflow: "hidden",
          position: "relative",
          background: "black",
        }}
      >

        <div
          style={{
            position: "absolute",
            width: MAP_WIDTH * MAP_SCALE,
            height: MAP_HEIGHT * MAP_SCALE,
            transform: `translate(${-cameraX}px, ${-cameraY}px)`,
          }}
        >

          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('/img/map/Fortress1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "40% 40%",
              imageRendering: "pixelated",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: player.x - FRAME_WIDTH / 2,
              top: player.y - FRAME_HEIGHT,
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              scale: "1.3",
              backgroundImage: "url('/img/characters/cahara1-kopio.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: `${FRAME_WIDTH * 3}px ${FRAME_HEIGHT * 4}px`,
              backgroundPosition: `-${frame * FRAME_WIDTH}px -${row[dir] * FRAME_HEIGHT}px`,
              imageRendering: "pixelated",
            }}
          />

        </div>
      </div>
    </div>
  )

}
