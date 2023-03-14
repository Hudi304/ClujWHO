import { FC, memo } from 'react'
import './icon.scss'
import { CheckIcon, XIcon } from '@heroicons/react/outline'

import {
  CheckCircleIcon,
  ChevronDownIcon as ChevronDownSolid,
  TrendingUpIcon as TrendingUpIconSolid
} from '@heroicons/react/solid'

export const ICONS = {
  CANCEL: XIcon,
  CHECK: CheckIcon,
  CHECK_CIRCLE: CheckCircleIcon
}

type Props = {
  icon: any
  className?: string
  size?: number
}

export const Icon: FC<Props> = memo(({ icon, className, size = 5 }: Props) => {
  const IconComp = icon
  if (!icon) return null
  return (
    <IconComp
      className={className}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`
      }}
    />
  )
})
