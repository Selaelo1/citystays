import { forwardRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="flex items-center">
          <input
            type="checkbox"
            ref={ref}
            className={`
              rounded border-gray-300 text-black focus:ring-black
              ${error ? 'border-red-300' : ''}
              ${className}
            `}
            {...props}
          />
          <span className="ml-2 text-sm text-gray-700">{label}</span>
        </label>
        {(error || helperText) && (
          <p className={`text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';