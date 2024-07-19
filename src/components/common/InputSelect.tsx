import React from 'react';

interface Options {
  key: string;
  value: string;
  disabled?: boolean;
}

interface InputSelectProps {
  name: string;
  label?: string;
  options: Array<Options>;
  // onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange?: (selectedValue: string) => void;
  required?: boolean;
  styles?: string;
  value?: string;
}

const InputSelect: React.FC<InputSelectProps> = ({
  name,
  label,
  options = [],
  onChange,
  required,
  styles = '',
  value
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange?.(selectedValue);
  };

  return (
    <div className="flex flex-col gap-2 w-ful">
      {label && (
        <label htmlFor={`select-${name}`} className="text-stone-200 capitalize">
          {label} {required && <span className="text-green-600 text-xl m-0 p-0" title="campo requerido">*</span>}
        </label>
      )}
      <select
        id={`select-${name}`}
        name={name}
        onChange={handleChange}
        className={`bg-stone-700 text-stone-100 outline outline-2 outline-green-900 p-1 md:px-2 rounded-lg ${styles}`}
        required={required}
        value={value || ''}
        aria-required={required}
      >
        {/* <option value="" disabled>Seleccionar</option> */}
        {options.map(({ key, value, disabled }) => (
          <option key={key} value={value} disabled={disabled}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export { InputSelect };
