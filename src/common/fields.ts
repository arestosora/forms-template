import type { Field } from "@/types/field";

export const formFields: Field[] = [
    { type: 'TextInput', question: 'What is your name?', model: '' },
    { type: 'DropDown', question: 'Select your country', model: '', choices: ['USA', 'Canada', 'Mexico', 'some other countries idk lol'] },
    { type: 'Calendar', question: 'Select your birthdate', model: new Date() },
    { type: 'Checkbox', question: 'Select your interests', model: [], choices: ['Sports', 'Music', 'Travel'] },
    { type: 'RadioButton', question: 'Select your gender', model: '', choices: ['Male', 'Female', 'Other'] },
    { type: 'TextArea', question: 'Tell us about yourself', model: '' }
];
