import React from 'react'

const InputField = ({ value, setValue, nameKey, type, invalidFields, setInvalidFields, placeholder }) => {
  return (
    <div className=' w-full '>
      <label className='text-lg' htmlFor={nameKey}>{nameKey?.slice(0, 1).toUpperCase() + nameKey?.slice(1)}</label>
      <input
        type={type || 'text'}
        className='px-4 py-2 rounded-sm border w-full mt-2'
        placeholder={placeholder ? `${placeholder}` : nameKey?.slice(0, 1).toUpperCase() + nameKey?.slice(1)}
        value={value}
        onChange={e => setValue(prev => ({ ...prev, [nameKey]: e.target.value }))}
        onFocus={() => setInvalidFields([])}
      />
      {invalidFields?.some(el => el.name === nameKey) &&
        <smail className='text-main text-[10px] '> {invalidFields.find(el => el.name === nameKey)?.mes} </smail>}
    </div>
  )
}

export default InputField