export interface RadioOption {
  label: string
  value: string
}

export interface RadioProps {
  name: string
  options: RadioOption[]
  defaultValue?: string
}

export interface RadioOptionProps extends RadioOption {
  name: string
  selected: boolean
  onClick: () => void
}


export interface ColorProps {
  name: string
  hex: string
  description?: string
}