import type { Locale } from '../i18n/types'

interface FlagProps {
  code: Locale
}

export default function Flag(props: FlagProps) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 24 16"
      class="inline-block shrink-0 rounded-[2px] ring-1 ring-white/20"
      aria-hidden="true"
    >
      {props.code === 'fr' && (
        <>
          <rect width="8" height="16" fill="#0055A4" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#EF4135" />
        </>
      )}
      {props.code === 'lb' && (
        <>
          <rect width="24" height="5.333" fill="#EF3340" />
          <rect y="5.333" width="24" height="5.333" fill="#FFFFFF" />
          <rect y="10.666" width="24" height="5.334" fill="#00A3E0" />
        </>
      )}
      {props.code === 'en' && (
        <>
          <rect width="24" height="16" fill="#012169" />
          <g stroke-linecap="round">
            <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" stroke-width="3" />
            <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" stroke-width="1.6" />
            <path d="M12,0 L12,16 M0,8 L24,8" stroke="#FFFFFF" stroke-width="4.4" />
            <path d="M12,0 L12,16 M0,8 L24,8" stroke="#C8102E" stroke-width="2.6" />
          </g>
        </>
      )}
    </svg>
  )
}
