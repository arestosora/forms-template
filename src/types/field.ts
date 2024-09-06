export interface BaseField<T> {
    type: string;
    question: string;
    model: T;
}

export interface TextInputField extends BaseField<string> {
    type: 'TextInput';
}

export interface DropDownField extends BaseField<string | number> {
    type: 'DropDown';
    choices: (string | number)[];
}

export interface CalendarField extends BaseField<Date | string> {
    type: 'Calendar';
}

export interface CheckboxField extends BaseField<string[]> {
    type: 'Checkbox';
    choices: string[];
}

export interface RadioButtonField extends BaseField<string> {
    type: 'RadioButton';
    choices: string[];
}

export interface TextAreaField extends BaseField<string> {
    type: 'TextArea';
}

export interface PasswordField extends BaseField<string> {
    type: 'Password';
}

export interface AutoCompleteField extends BaseField<string> {
    type: 'AutoComplete';
    suggestions: string[];
}

export interface ChipsField extends BaseField<string[]> {
    type: 'Chips';
}

export interface ColorPickerField extends BaseField<string> {
    type: 'ColorPicker';
}

export interface EditorField extends BaseField<string> {
    type: 'Editor';
}

export interface InputMaskField extends BaseField<string> {
    type: 'InputMask';
    mask: string;
}

export interface InputNumberField extends BaseField<number> {
    type: 'InputNumber';
    min?: number;
    max?: number;
}

export interface InputSwitchField extends BaseField<boolean> {
    type: 'InputSwitch';
}

export interface KnobField extends BaseField<number> {
    type: 'Knob';
    min: number;
    max: number;
}

export interface MultiSelectField extends BaseField<string[]> {
    type: 'MultiSelect';
    options: string[];
}

export interface SliderField extends BaseField<number> {
    type: 'Slider';
    min: number;
    max: number;
}

export interface ToggleButtonField extends BaseField<boolean> {
    type: 'ToggleButton';
}

export interface TreeSelectField extends BaseField<any[]> {
    type: 'TreeSelect';
    options: any[];
}

export interface TriStateCheckboxField extends BaseField<string | null> {
    type: 'TriStateCheckbox';
}

export type Field =
    | TextInputField
    | DropDownField
    | CalendarField
    | CheckboxField
    | RadioButtonField
    | TextAreaField
    | PasswordField
    | AutoCompleteField
    | ChipsField
    | ColorPickerField
    | EditorField
    | InputMaskField
    | InputNumberField
    | InputSwitchField
    | KnobField
    | MultiSelectField
    | SliderField
    | ToggleButtonField
    | TreeSelectField
    | TriStateCheckboxField;
