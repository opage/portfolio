import { For } from 'solid-js'

interface ParticleSpec {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
}

const particles: ParticleSpec[] = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 20,
  duration: Math.random() * 20 + 15,
  opacity: Math.random() * 0.6 + 0.1,
}))

export default function Particles() {
  return (
    <div id="tsparticles" class="z-0">
      <For each={particles}>
        {(p) => (
          <span
            class="absolute bottom-0 rounded-full bg-accent/60"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        )}
      </For>
    </div>
  )
}
