import * as React from "react"

interface RadioOption {
  label: string
  value: string
}

interface RadioProps {
  name: string
  options: RadioOption[]
  defaultValue?: string
}

export const RadioInput = (props: React.PropsWithChildren<RadioProps>) => {
  const { name, options, defaultValue } = props
  const [selected, setSelected] = React.useState<string>(defaultValue || options[0].value)
  return (
    <>
      {options.map(option => (
        <RadioOption
          {...option}
          name={name}
          selected={selected === option.value}
          onClick={() => {
            setSelected(option.value)
          }}
        />
      ))}
    </>
  )
}

interface RadioOptionProps extends RadioOption {
  name: string
  selected: boolean
  onClick: () => void
}

const RadioOption: React.FC<RadioOptionProps> = (props: RadioOptionProps) => {
  const { name, value, label, selected } = props
  const id = `radio-input-${name}-${value}`

  const onClick: React.MouseEventHandler = event => {
    event.preventDefault()
    props.onClick()
  }

  return (
    <div className="custom-control custom-radio" key={value}>
      <input className="custom-control-input" type="radio" name="option" id={id} value={value} checked={selected} />
      <label className="custom-control-label" htmlFor={id} onClick={onClick}>
        {label}
      </label>
    </div>
  )
}
